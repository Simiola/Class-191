AFRAME.registerComponent("drive", {
    init: function(){
       var gamestatevalue= this.el.getAttribute("game")
        if(gamestatevalue==="play"){
            this.drivecar()
        }
    },
    drivecar: function(){
        var wheelrotation = 0
        var multiply = 10
        // key controllers
        window.addEventListener("keydown", function(e){
        var wheel = document.querySelector("#control-wheel")
        if(e.code==="ArrowRight" && wheelrotation > -40){
            wheelrotation -= 5
            wheel.setAttribute("rotation", {x: 0, y: 0, z: wheelrotation})

        }
        if(e.code==="ArrowLeft" && wheelrotation < 40){
            wheelrotation += 5
            wheel.setAttribute("rotation", {x: 0, y: 0, z: wheelrotation})

        }

        var camera = document.querySelector("#camera-rig")
        var camerarotation= camera.getAttribute("rotation")
        var cameraposition= camera.getAttribute("position")
        var cameracontrol= camera.getAttribute("movement-controls")
        camera.setAttribute("movement-controls",{"speed": cameracontrol + 0.05})
        console.log(cameracontrol.speed)
        var cameradirection = new THREE.Vector3();
        camera.object3D.getWorldDirection(cameradirection) 

        if(e.code==="ArrowRight"){
            camerarotation -= 5
            camera.setAttribute("rotation", {x: 0, y: camerarotation, z: 0})
            camera.setAttribute("movement-controls", {"speed": cameracontrol.speed + 0.05})

        }

        if(e.code==="ArrowLeft"){
            camerarotation += 5
            camera.setAttribute("rotation", {x: 0, y: camerarotation, z: 0})
            camera.setAttribute("movement-controls", {"speed": cameracontrol.speed + 0.05})

        }
        
    }
        )
        window.addEventListener("keyup", function(e){
            var camera = document.querySelector("#camera-rig")
            var cameradirection = new THREE.Vector3();
        camera.object3D.getWorldDirection(cameradirection) 
        var cameracontrol= camera.getAttribute("movement-controls")

        if(e.code==="Space"){
            var break1 = document.querySelector("#control-break")
            break1.setAttribute("material", "color", "gray")
        }

        })

        

    },
    setvelocity: function(){
        console.log("increasing the velocity of the car")
        return Math.random() < 0.25
        

    }

})


