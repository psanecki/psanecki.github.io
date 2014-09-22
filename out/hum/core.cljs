(ns hum.core)

(enable-console-print!)

(defn get-osc-type [osc type]
  (condp = type
    :sawtooth (.-SAWTOOTH osc)
    :sine (.-SINE osc)
    :square (.-SQUARE osc)
    :triangle (.-TRIANGLE osc)))

(defn create-context []
  (let [constructor (or js/window.AudioContext
                        js/window.webkitAudioContext)]
    (constructor.)))

(defn create-osc
  ([ctx]
     (.createOscillator ctx))
  ([ctx type]
     (let [osc (.createOscillator ctx)
           osc-type (get-osc-type osc type)]
       (set! (.-type osc) osc-type)
       osc)))

(defn connect [from to]
  (.connect from to)
  from)

(defn ->node [from to]
  (connect from to))

(defn curr-time [ctx]
(.-currentTime ctx))

(defn now []
  (.getTime (js/Date.)))

(defn ->destination [node]
  (.connect node (.-destination (.-context node))))

(defn fill-with-noise! [buffer]
  (let [channel-data (.getChannelData buffer 0)]
    (dotimes [i (.-length channel-data)]
      (aset channel-data i (- (* (Math/random) 2) 1)))))


(defn fill-with-constant! [buffer value]
  (let [channel-data (.getChannelData buffer 0)]
    (dotimes [i (.-length channel-data)]
      (aset channel-data i value))))


(defn set-noise-rate! [lf-noise-node sample-rate]
  (set! (.-value (.-playbackRate lf-noise-node))
        (/ sample-rate (.-sampleRate (.-context lf-noise-node)))))

(defprotocol Noise
  (noise [ac] "White Noise")
  (lf-noise [ac] "Pitched white noise"))

 (defprotocol AudioOps
   (binary [ac binary-op])
   (plus [ac])
   (mult [ac])
   (constant [ac value]))


(extend-type js/window.AudioContext
  Noise
  (noise [ac]
    (let [buffer-size 4096
          script-processor (.createScriptProcessor ac buffer-size 1 1)]
      (do
        (set! (.-onaudioprocess script-processor)
              (fn [e]
                (let [output
                      (-> e .-outputBuffer (.getChannelData 0))]
                  (dotimes [i buffer-size]
                    (aset output i (- (* (Math/random) 2) 1))))))
        script-processor)))
    ;; LF-NOISE
  (lf-noise [ac]
    (let [buffer-size (* 2 (.-sampleRate ac))
          noise-buffer (.createBuffer ac 1 buffer-size (.-sampleRate ac))
          lf-noise-node (.createBufferSource ac)]
      (do
        (fill-with-noise! noise-buffer)
        (set! (.-buffer lf-noise-node)
              noise-buffer)
        (.start lf-noise-node)
        (set! (.-loop lf-noise-node) true)
        lf-noise-node)))
  AudioOps
  (binary [ac binary-op]
    (let [script-processor (.createScriptProcessor ac 0 2 1)]
      (do
        (set! (.-onaudioprocess script-processor)
              (fn [e]
                (let [input-0
                      (-> e .-inputBuffer (.getChannelData 0))
                      input-1
                      (-> e .-inputBuffer (.getChannelData 1))
                      output
                      (-> e .-outputBuffer (.getChannelData 0))]
                  (dotimes [i (.-bufferSize script-processor)]
                    (aset
                     output i
                     (binary-op (aget input-0 i)
                        (aget input-1 i)))))))
        script-processor)))
  (plus [ac] (binary ac +))
  (mult [ac] (binary ac *))
  (constant [ac value]
    (let [buffer-size (* 2 (.-sampleRate ac))
          buffer (.createBuffer ac 1 buffer-size (.-sampleRate ac))
          constant-node (.createBufferSource ac)]
      (do
        (fill-with-constant! buffer value)
        (set! (.-buffer constant-node)
              buffer)
        (.start constant-node)
        (set! (.-loop constant-node) true)
        constant-node))))


(defn plus! [node-0 node-1]
  (let [ac (.-context node-0)
        merger (.createChannelMerger ac 2)
        p (plus ac)]
    (do
      (.connect node-0 merger 0 0)
      (.connect node-1 merger 0 1)
      (.connect merger p)
      p)))

(defn mult! [node-0 node-1]
  (let [ac (.-context node-0)
        merger (.createChannelMerger ac 2)
        p (mult ac)]
    (do
      (.connect node-0 merger 0 0)
      (.connect node-1 merger 0 1)
      (.connect merger p)
      p)))




(prn "hum.core")



(def ac (create-context))
(def white-noise  (noise ac))
(prn (now))


;; test oscylatorow
(def const-110 (constant ac 550))
;;(.start const-110)
(def osc-0 (create-osc ac))
(.start osc-0)
(set! (.-value (.-frequency osc-0)) 3)
(set! (.-oscilatorType osc-0) 1)

(def osc-1 (create-osc ac))
(.start osc-1)

(set! (.-value (.-frequency osc-1)) 0)
(def lf-noise-1 (lf-noise ac))
(set-noise-rate! lf-noise-1 140)
(def lf-noise-0 (lf-noise ac))
(set-noise-rate! lf-noise-0 1001)

;;(plus! osc-0 const-110)
(def x (mult! lf-noise-0
              (mult! osc-0
                     (mult! (constant ac 1055) lf-noise-1))))
(.connect x (.-frequency osc-1))
;;(->destination osc-1)
;;(def x (mult! lf-noise osc-0))
;;(prn x)
(->destination x)


(js/setTimeout #(do
                   (.disconnect x)) 100000)

;;(def p (plus ac))
;;(prn (str "plus" p))

(def i (js/setInterval  #(prn (curr-time ac)) 1000))
(js/clearInterval i)


(prn (= (type lf-noise) js/AudioBufferSourceNode))

;;(set! (.-value (.-playbackRate lf-noise)) 0.01)
;;(->destination lf-noise)



;;(js/setTimeout #(.stop lf-noise) 300)


#_(let [name (.-appName js/navigator)]
  (js/alert name))



;;(->destination white-noise)


;; (defn t [x & {:keys [y z]
;;               :or {y 10
;;                    z 4}}]
;;   (prn z)
;;   (+ y z))

;; (prn (t 0 :z 3 :y 7))





;; (deftype Test [test])
;; (def t (->Test "sfa"))
;; (set! (.-test t) "dsada")
;; (prn (.-test t))

;;(def a  (into-array Float (range 10)))

;; js/Float32Array.

;;(prn a)

;;(aset a 0 22)

;;(prn (aget  (js/Float32Array. a) 0))
