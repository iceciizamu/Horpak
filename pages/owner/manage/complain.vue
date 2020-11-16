<template>
   
    <b-container class="ice">
         
          <table class="table table-brdered" style="margin:30px">
    <thead class="thead-dark">
        <tr style="text-align:center;">
            <th >ห้อง</th>
            <th>ชื่อผู้เช่า</th>
            <th >เรื่องร้องเรียน</th>
            <th>รายละเอียด</th>
            
        </tr>
    </thead>
    <tbody>
        <tr v-for="complain in complains" v-bind:key ="complain.room">
        
        <td>{{complain.room}}</td>
        <td>{{complain.userId}}</td>
        <td>{{complain.complaint}}</td>
        <td>{{complain.description}}</td>
        
       
       
        </tr>
    </tbody>
    
    </table>
           <!--card-->
  <!-- <div class="card" style="width: 18rem;" v-for="complain in complains " :key="complain">
  <img src="" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">{{complain.complaint}}</h5>
    <p class="card-text">{{complain.room}}</p>
    <p class="card-text">{{complain.userId}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div> -->

  <!--card bv-->
 
  <!-- <b-card 
  v-for="complain in complains " :key="complain"
    title= "ร้องเรียน"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{complain.complaint}}
      {{complain.room}}
      {{complain.userId}}
    </b-card-text>

     <b-button href="#" variant="primary">Go somewhere</b-button> 
  </b-card> -->

    </b-container>
</template>


<script>
import {db} from '~/plugins/firebaseConfig.js'
import firebase from 'firebase/app'
export default {
      layout:"com",
    data(){
        return{
            complains:[],
            complain:{
                complaint:'',
                description:'',
                room:'',
                userId:''
            }
        }
    },
    mounted(){
     liff.init({
        liffId:'1655214794-o9BP0a5a'
     }).then(()=>{
       if(liff.isLoggedIn()){
         liff.getProfile().then(profile =>  {
           this.$store.dispatch('setLine',profile);
          
          //  this.profile.pictureUrl = profile.pictureUrl
          //  this.profile.displayName = profile.displayName
          //  this.profile.userId = profile.userId
         })
       }else{
         liff.login();
       }
     })
    },
    computed: {
        sortUser() {
            return this.complains.slice().sort((a,b)=>{
                return a.id - b.id
                
            })
        },
     getLine(){
       return this.$store.getters.getLine;
        
     }
    },
    created(){
        this.getComplain()
    },
    methods:{
        getComplain(){
             db.collection('complaint').get().then(querySnapshot =>{
                 const complains =[]
                 const activeItem =[]
                
            querySnapshot.forEach(doc => {
                complains.push(doc.data())
                activeItem.push(doc.id)
                console.log(doc.id)
                
                
        })
        this.complains = complains
      
        })
        // db.collection('user').get().then((querySnapshot)=>{
        //     querySnapshot.forEach((doc)=>{
        //         this.users.push(doc.data());
        //     })
        // })
        }
    }
    
}
</script>

<style  scoped>
.ice{
    text-align: center;
}
</style>