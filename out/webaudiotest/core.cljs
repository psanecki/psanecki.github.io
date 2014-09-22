(ns webaudiotest.core)

(enable-console-print!)

;;(def chance (js/Chance. Math/random))

;;(println (.bool chance {:likehood 100}))

;; (def i
;;   (.setInterval js/window
;;                 #(println (.bool chance {:likehood 100})) 1000))



(def MAX_ITER 10)
(defn looper []
  (let [chance (js/Chance. (.random js/Math))]
    (letfn [(e []
              (println (.bool chance {:likehood 100})))]
      (dorun (map #(js/setTimeout e (* % 1000)) (range 10))))))

#_(looper)

(prn (type (into-array js/Float32Array (repeatedly 10 rand))))

;; webaudio
;; (def context (let [x  (or js/AudioContext
;;                           js/webkitAudioContext)]
;;                (x.)))
;; (prn context)
;; (def p-num 16)

;; (def periodic
;;   (.createPeriodicWave
;;    context
;;    ;;(js/Float32Array. (into-array [1 0.5 0.25 0.125]))

;;    (js/Float32Array. (into-array (repeatedly p-num rand)))
;;    (js/Float32Array. (into-array (cons 0 (repeatedly (dec p-num) rand))))
;;    ;;(js/Float32Array. (into-array (repeatedly 16 rand)))
;;    ))



;; (def oscillator (.createOscillator context))
;; ;;(set! (.-type oscillator) (.-SINE oscillator))
;; (set! (.-value (.-frequency oscillator)) 440)
;; (.setPeriodicWave oscillator periodic)
;; (.connect oscillator (.-destination context))
;; ;;(.start oscillator 0)
;; ;;(prn "get " (aget (js/Float32Array. (into-array [ 1 3 4])) 0) )




;; (prn periodic)
