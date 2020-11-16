<template>
<b-container class="all">
    <div class="ice" center>
    <h1>จัดการผู้เช่า</h1>
      <form class="manage__user"  >
            <div class="from-group">
                <label for="recipient-name" class="col-form-label">เลขบัตรประชาชน</label>
                <input v-model="user.idcard"
                class="validate" placeholder="เลขบัตรประชาชน">
            </div>
            <div class="from-group" >
                <label for="recipient-name" class="col-form-label">ชื่อผู้เช่า</label>
                <input v-model="user.name"
                class="validate" placeholder="ชื่อผู้เช่า">
            </div>
            
            <!-- <div class="from-group">
                 <label for="recipient-name" class="col-form-label">เบอร์โทรศัพท์</label>
                <input v-model="user.phone"
                class="validate" placeholder="เบอร์โทรศัพท์">
            </div> -->
            
            <div class="from-group" >
                <label for="recipient-name" class="col-form-label">สถานะผู้เช่า</label>
                <input v-model="user.status" 
                class="validate" placeholder="สถานะผู้เช่า">
            </div>
            <div class="from-group">
                <label for="recipient-name" class="col-form-label">ตึก</label>
                <input v-model="user.building"
                class="validate" placeholder="ตึก">
            </div>
            <div class="from-group">
                <label for="recipient-name" class="col-form-label">เลขห้อง</label>
                <input v-model="user.roomid"
                class="validate" placeholder="เลขห้องที่เช่า">
            </div>
<br>
            <div class="col md-4">
                <i @click="onAdd" class="material-icons">add_circle</i>
               
            </div>   
               
        </form>
    </div>
        <table class="table table-brdered" style="margin:30px">
    <thead class="thead-dark">
        <tr style="text-align:center;">
            <th >เลขบัตรประชาชน</th>
            <th >ชื่อ</th>
            <th>นามสกุล</th>
            <th>เพศ</th>
            <th>เบอร์โทร</th>
            <th>สถานะ</th>
            <th>ตึก</th>
            <th>เลขห้อง</th>
            <th>แก้ไข</th>
            <th>ลบ</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="user in users" v-bind:key ="user.id">
        
        <td>{{user.idcard}}</td>
        <td>{{user.name}}</td>
        <td>{{user.lastname}}</td>
        <td>{{user.gender}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.status}}</td>
        <td>{{user.building}}</td>
        <td>{{user.roomid}}</td> 
       
       
        <td> <i @click="onEdit(user)"   class="material-icons">create</i></td>
        <td><i @click="onDelete(user.id)" class="material-icons">delete_forever</i></td>
       
        </tr>
    </tbody>
    
    </table>
    <!-- modal -->
    <b-modal ref="my-modal" hide-footer title="Using Component Methods" id="edit">
        <div>
        
        <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          
          label="idcard"
          label-for="idcard-input"
          invalid-feedback="ID-CARD is required"
          >
          <b-form-input
            id="idcard-input"
           
           
            required
            v-model="user.idcard"
            placeholder="เลขบัตรประชาชน"
          ></b-form-input>
        </b-form-group>
         <b-form-group
          
          label="name"
          label-for="name-input"
          invalid-feedback="Name is required"
          >
          <b-form-input
            id="name-input"
           
          
            required
            v-model="user.name"
            placeholder="ชื่อผู้เช่า"
          ></b-form-input>
        </b-form-group>
        <!-- :state="roomiddState" -->
        <b-form-group
          
          label="roomid"
          label-for="roomid-input"
          invalid-feedback="Room IDis required"
          >
          <b-form-input
            id="roomid-input"
           
            
            required
            v-model="user.roomid"
            placeholder="เลขห้อง"
          ></b-form-input>
        </b-form-group>
        <b-form-group
         
          label="status"
          label-for="status-input"
          invalid-feedback="Status is required"
          >
          <b-form-input
            id="idcard-input"
           
           
            required
            v-model="user.status"
            placeholder="สถานะผู้เช่า"
          ></b-form-input>
        </b-form-group>
      </form>
       
            
        <b-button  variant="outline-danger" block @click="hideModal">ปิด</b-button>
        <b-button @click="onUpdate()" variant="warning" >แก้ไขข้อมูล</b-button>
       
      
    
  
</div>
    </b-modal>

    <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200;400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">  
</b-container>
</template>



<script>
import {db} from '~/plugins/firebaseConfig.js'
import firebase from 'firebase/app'

export default {
    name:'manageUser',
    mounted(){
     liff.init({
       liffId:'1655214794-XG1pdjEj'
     }).then(()=>{
       if(liff.isLoggedIn()){
         liff.getProfile().then(profile =>  {
           this.$store.dispatch('setLine',profile);
           this.isDone();
          //  this.profile.pictureUrl = profile.pictureUrl
          //  this.profile.displayName = profile.displayName
          //  this.profile.userId = profile.userId
         })
       }else{
         liff.login();
       }
     })

   },
    data(){
        return{
            show: false,
            users:[],
            user:{
                idcard:'',
                name:'',
                lastname:'',
                gender: '',
                phone:'',
                status:'',
                building:'',
                roomid:'',
                userid:this.$store.getters.getLine.userId
            },
            activeItem:[],
            index:'',
            
           
            
        }
    },
    computed: {
        sortUser() {
            return this.users.slice().sort((a,b)=>{
                return a.id - b.id
                
            })
        },
     getLine(){
       return this.$store.getters.getLine;
        
     }
    },
    created(){
        this.getUser()
    },
    methods:{
        getUser(){
             db.collection('user').get().then(querySnapshot =>{
                 const users =[]
                 const activeItem =[]
                
            querySnapshot.forEach(doc => {
                users.push(doc.data())
                activeItem.push(doc.id)
                console.log(doc.id)
                
                
        })
        this.users = users
        this.activeItem = activeItem
      
        })
        // db.collection('user').get().then((querySnapshot)=>{
        //     querySnapshot.forEach((doc)=>{
        //         this.users.push(doc.data());
        //     })
        // })
        },
        onAdd(){
           db.collection('user').add(this.user).then(this.getUser)
            
        },
        onDelete(){
            if(confirm('คุณแน่ใจที่จะลบใช่ไหรือไม่ ?')){
                //doc line
              db.collection("user").doc(this.$store.getters.getLine.userId).delete().then(function() {
                  
                 console.log("Document successfully deleted!");
            }).catch(function(error) {
            console.error("Error removing document: ", error);
            });
            }
            
        },
        hideModal() {
        this.$refs['my-modal'].hide()
      },
        onEdit(user){
            this.$refs['my-modal'].show();
            this.user = user;
            

        },
        onUpdate(){
           var data ={
          
          idcard: this.user.idcard,
          name: this.user.name,
          lastname: this.user.lastname,
          status:this.user.status,
          phone: this.user.phone,
            roomid:this.user.roomid
        };
//ใส่doc line
           db.collection("user").doc(this.$store.getters.getLine.userId).update(data)
.then(function() {
    console.log("Document successfully updated!");
    alert('แก้ไขข้อมูลเสร็จสิ้น')
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});


            
            
        }  

        }
  
}
</script>
<style  scoped>
.ice{
    
    text-align: center;
    background-color: hsl(218, 100%, 98%);
    display: block;

  margin-top: 40px;
  
  margin-left: 80px ;
 border: white;
 box-shadow:0 0 8px rgba(0,0,0,0.15); 
  
}
.all{
    font-family: 'Bai Jamjuree', sans-serif;
}
</style>