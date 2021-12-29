    // console.log(wind)
    /*form*/
      let header=document.querySelector(".section-5 .col-sm-8 .jen_register");
      let btn=header.getElementsByTagName("a");
      let form1=document.querySelector(".section-5 .col-sm-8 .form-1");
      let form2=document.querySelector(".section-5 .col-sm-8 .form-2");
        for(var i=0;i<btn.length;i++){
            btn[i].addEventListener("click",function() {
                var act=document.querySelector(".button.active");
                // console.log(act[0])
                act.className=act.className.replace(" active","");
                this.className+=" active"
                // console.log(this)
                if(btn[0].classList.contains("active")){
                    form1.style.display="block";
                    form2.style.display="none";
                }else{
                    form1.style.display="none";
                    form2.style.display="block";
                }
            })  
        }
        console.log(btn[1])

        /*form*/

        /*button image*/ 
        var btnBola = document.querySelector(".img_bola .btn-img");
        var imgBola= document.querySelector(".img_bola img");
        var btns_bola = btnBola.getElementsByTagName("button");
        for (let i = 0; i < btns_bola.length; i++) {
          btns_bola[i].addEventListener("click", function() {
            let current = document.querySelector(".btn-bola.active");
            current.className = current.className.replace(" active", "");
            this.className += " active";

            if(btns_bola[i].classList.contains("active")){
                imgBola.src=`assets/img/Lapangan/lap_bola${i}.jpeg`

            }
            console.log(btns_bola[i].classList.contains("active"))

          });
        } 
        var btnBultang = document.querySelector(".img_bultang .btn-img");
        var btns_bultang = btnBultang.getElementsByTagName("button");
        var imgBultang= document.querySelector(".img_bultang img");
        for (let i = 0; i < btns_bultang.length; i++) {
          btns_bultang[i].addEventListener("click", function() {
            let current = document.querySelector(".btn-bultang.active");
            current.className = current.className.replace(" active", "");
            this.className += " active";

             if(btns_bultang[i].classList.contains("active")){
                imgBultang.src=`assets/img/Lapangan/lap_bultang${i}.jpeg`

            }
          });
        } 
        /**/
        /*navbar*/
        let nav=document.querySelector(".nav-item");
        let nav_link=nav.getElementsByTagName("a");
        console.log(nav)
        for(var i=0;i<nav_link.length;i++){
            nav_link[i].addEventListener("click",function() {
                var act=document.querySelector(".nav-link.active");
                console.log(act[0])
                act.className=act.className.replace(" active","");
                this.className+=" active"
                console.log(this)
            })
        }
        /*button image*/
        /*navbar*/
        /* sticky */
        let navbar=$(".navbar");

        $(window).scroll(function(){
            let oTop=$(".section-1").offset().top-window.innerHeight;
            if($(window).scrollTop()>oTop){
                navbar.addClass("sticky");
            }else{
                navbar.removeClass("sticky")
            }
        });
        /*sticky*/