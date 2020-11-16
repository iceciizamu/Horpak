<template>
    
     <div><b-carousel id = "slider"
     controls
     indicators
    >
    <!--loop ข้อมูลจาก array item (item loopแสดงผลทีละตัว ส่วน items คือดึงจากdata itemsข้างล่างมา) -->
    <div v-for="item in items" :key="item.caption" >
        <b-carousel-slide
            :caption= item.caption
            :text= item.text
            :img-src= item.image
        ></b-carousel-slide>
    </div>
    </b-carousel>
    </div>

</template>

<script>
export default {
    data(){
        return{
            //สร้างตัวแปรเก็บค่าอาเรย์ไว้สลับสไลด์รูป
            items:[
                {caption:"A",image:require("@/assets/p1.jpg"),text:"Welcome"},
                {caption:"B",image:require("@/assets/p1.jpg"),text:"รายละเอียดหอพัก"},
                {caption:"C",image:require("@/assets/p1.jpg"),text:"จัดการหอพัก"},
            ]
        }
    }
}
</script>
