<template>
<div>

    <div >
        <formregister />
        <!--<nuxt-child/>-->
    </div>
</div>
</template>

<script>
import formregister from '@/components/manage/formregister'
//เรียก api ทำการgetข้อมูลมา เพิ่มข้อมูลไว้ในฐานข้อมูล

export default {
     layout: "registerbar",
    components:{
        formregister
    },
     methods: {
    //     //ทำงานฐานข้อมูล
    //     onSubmitted(customerData){
    //         //โยนข้อมูลจากformregister.vue ให้มาเรียกใช้งานในนี้
    //         console.log("Result", customerData);
    //         axios.customer("")
    //     }
     },
}
</script>