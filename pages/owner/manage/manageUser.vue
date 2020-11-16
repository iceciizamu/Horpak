<template>
<b-container fluid="md">
    <div>
        <h2>จัดการผู้เช่า User vbvb</h2>
        <form>
            <input type="text">
            <input type="submit" value="Save">
        </form>
        <cardList isAdmin />
        <modalcard />
    </div>
</b-container>
</template>

<script>
import cardList from '@/components/manage/cardList'
import modalcard from '@/components/apartment/modalcard'
export default {
    layout:"corelayout",
    components:{
        cardList,modalcard
    },
}
</script>