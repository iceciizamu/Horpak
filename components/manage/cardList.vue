<template>
    <b-row class="py-2">
        <formcard id= "1" title="ตึก A" content="หอหญิง" image="https://cdn.pixabay.com/photo/2012/03/09/00/03/architecture-22527__480.jpg" :isAdmin=isAdmin />
        <formcard id = "2" title="ตึก B" content="หอรวม" image="https://media.istockphoto.com/photos/new-york-in-the-winter-picture-id1182533976?b=1&k=6&m=1182533976&s=170667a&w=0&h=JDXjLvjYdPbGRmUcgZfOUAGRJTm_txPqRgwsAfIUnp8=" :isAdmin=isAdmin />
        <formcard id = "3" title="ตึก C" content="หอชาย" image="https://cdn.pixabay.com/photo/2016/01/19/17/32/apartment-building-1149751__480.jpg" :isAdmin=isAdmin />
        </b-row>
</template>
<script>
import formcard from '@/components/manage/formcard'
export default {
    components:{
        formcard
    },props:{
        isAdmin:{
            type:Boolean,
            //ระบุเป้นทรู เป็นadmin
            default:true
        }
    }
}
</script>