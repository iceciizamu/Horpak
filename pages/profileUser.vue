<template>
<div>

    <div >
        <read />
    </div>
</div>
</template>

<script>
import read from '@/components/manage/read'
//เรียก api ทำการgetข้อมูลมา เพิ่มข้อมูลไว้ในฐานข้อมูล

export default {
     layout: "registerbar",
    components:{
        read
    },
    
}
</script>