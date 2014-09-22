(ns tsneweb.core)

(enable-console-print!)

(prn "hello")

(defn ^:export cloud []
  (let [scene (js/THREE.Scene.)
        width (.-innerWidth js/window)
        height (.-innerHeight js/window)

        renderer (if js/window.WebGLRenderingContext
                   (js/THREE.WebGLRenderer.)
                   (js/THREE.CanvasRenderer.))

        camera (js/THREE.PerspectiveCamera. 75 (/ width height) 0.1 1000000 )


        fpc (js/THREE.FirstPersonControls. camera)

        clock (js/THREE.Clock. )


        material (js/THREE.LineBasicMaterial.
                      (clj->js {:color 0x000000
                                :linewidth 1.2
                                :fog true;;(*  (rand) 0xffffff00)
                                }))



        render (fn cb []
                 (.update fpc (.getDelta clock))
                 (js/requestAnimationFrame cb)
                 (.render renderer scene camera))

        lens (vec js/letter_lens)
        coords  (vec js/letters)
        red (reductions + (map #(* 3 %) lens))

        group (js/THREE.Object3D.)
        ]

     (dotimes [i (count red)]
            (let [start (if (zero? i) i (nth red (dec i)))
                  end (nth red i)
                  xyzs (partition 3 (subvec coords start end))
                  geometry (js/THREE.Geometry.)
                  line (js/THREE.Line. geometry material)]
              (doseq [xyz xyzs]
                (let [[x y z] xyz]
                  (.push (.-vertices geometry) (js/THREE.Vector3.
                                                x (* -1 y)  z))))
              (.add group line)))

    (.add scene group)

    (set! (.-fog scene) (js/THREE.Fog. 0xffffff 0.015 1500))

    (.setClearColor renderer 0xffffff 1)


    (set! (.-lookSpeed fpc) 0.1)
    (set! (.-movementSpeed fpc) 100)
    (set! (.-noFly fpc) false)
    (set! (.-lookVertical fpc) true)
    (set! (.-constrainVertical fpc) true)
    (set! (.-verticalMin fpc) 1)
    (set! (.-verticalMax fpc) 2)
    (set! (.-lon fpc) 0)
    (set! (.-lat fpc) 0)

    (.setSize renderer width height)
    (.appendChild js/document.body (.-domElement renderer) )

    (render)
    ))

(cloud)