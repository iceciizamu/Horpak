<template>
 
  <b-col md="4">
  <b-card
    :title=title
    :img-src=image
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{content}}
    </b-card-text>
  <nuxt-link class="btn btn-success" to="/owner/manage/manageUser">ดูรายละเอียด</nuxt-link>
    
  </b-card>
</b-col>
 
</template>
<script>
export default {
  props:{
    id:{
      type:String
    },
    title:{
      type:String,
      required:true
    },content:{
      type:String,
      required:true
    },image:{
      type:String,
      required:true
    },
    isAdmin:{
      type:Boolean,
      required:false
    }
  },
  computed: {
    cardLink(){
      return this.isAdmin ? '/owner/manage/manageUser'+this.id :'/owner/manage/manageUser'+this.id
    }
  },
}
</script>

<style scoped>

.ice {

   color: white;
    border: white;
    box-shadow:0 0 8px rgba(0,0,0,0.15);
    background: #ffb6b6; 
  background: -webkit-linear-gradient(left,rgba(244,186,186,),#aac4f9); /*Safari 5.1-6*/
  background: -o-linear-gradient(right,#dbbaf4,#aac4f8); /*Opera 11.1-12*/
  background: -moz-linear-gradient(right,#dbbaf4,#aac4f9); /*Fx 3.6-15*/
  background: linear-gradient(to right, #dbbaf4, #aac4f9); /*Standard*/
    margin: 4%;
    padding: 6%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   
    

}
.button{
    text-align: center;
  
    
}
.box{
     border: white;
    box-shadow:0 0 8px rgba(0,0,0,0.15);
background: #ffffff; 
}
</style>