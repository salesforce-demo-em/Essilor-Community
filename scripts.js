var vm = new Vue({
    el: '#app',
    data: {
        state:1,
        blurWidth:172,
        barLeft: 163
    },
    methods: {
        next(){
            if(this.state<3){
                this.state++;
                console.log(this.state);
            }
           
        },
        handleTouchStart(event){
            var left = event.touches[0].pageX;
            if(left > 0 && left < 333){
                this.blurWidth = event.touches[0].pageX;
                this.barLeft = event.touches[0].pageX-9;
            }
            
        },
        handleTouchMove(event){
            var left = event.touches[0].pageX;
            if(left > 0 && left < 333){
                this.blurWidth = event.touches[0].pageX;
                this.barLeft = event.touches[0].pageX-9;
            }
        },
        handleTouchEnd(event){
            //console.log(event.touches[0].pageX,event.touches[0].pageY)
        },
        reset(){
            this.state = 1;
            document.getElementsByClassName('wrapper')[0].scrollTo(0,0);
            document.getElementsByClassName('wrapper')[1].scrollTo(0,0);
            document.getElementsByClassName('wrapper')[2].scrollTo(0,0);
        }
    }
});
