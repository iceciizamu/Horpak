<template>
    <b-container fluid>
       <Header/>
      

      
    </b-container>
</template>

<!--import ชื่อของcomponent ที่จะใส่ -->
<script>
import Header from '@/components/manage/Header'

export default {

    layout:"corelayout",
    components:{
        Header
        
        
    }
}
</script>