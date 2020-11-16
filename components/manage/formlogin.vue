<template>
    <b-container fluid='md' class="py-3">
        <b-card  class="box" >
            <b-card-body class="ice">
                
            <h2 align= "center">Login</h2>
            </b-card-body>  
        
        <b-form>
            <b-form-group >
                <label>Email</label>
                <b-form-input type="text" placeholder="Your Email"> </b-form-input>
                <br/>
                <label>Password</label>
                <b-form-input type="password" placeholder="Your Password"></b-form-input>
            </b-form-group>
            <div class="button">
                    <b-button variant="primary"  >LOGIN</b-button>
               </div>
        </b-form>
        </b-card>
        <div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
    </b-container>
</template>

<style>
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