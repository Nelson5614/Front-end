<template>
<div>
     <div class="section1 pt-16 pl-16 py-16">
       <div class="ml-16">
       <h1 class="primary--text">Contact Us</h1>
       <p class="white--text">Mlex Beauty Spa is the best <br> beauty spa you can find in town. Enjoy!</p>
       <span class="white--text">Home - Contact</span>
       </div>

        <div class="ml-13">
            <div>
              <v-btn class="mt-6" icon color="white">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn class="mt-6" icon color="white">
                <v-icon>mdi-whatsapp</v-icon>
              </v-btn> 
              <v-btn class="mt-6" icon color="white">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </div>
        </div>       
     </div>

     <div class="py-16">
       <v-container>
       <v-row>
         <v-col lg="6">
            <v-img
            src="@/assets/img/divider-1.jpg"
            class="rounded-xl"
            max-height="400px"
            max-width="400px"
            ></v-img>
         </v-col>
         <v-col lg="6">
           <h1 class="primary--text">Contact Infromattion</h1>
           <h2>You can connect with us</h2>

           <v-row>
             <v-col>
               <h3 class="primary--text">Find us here:</h3>
               <span>Police Europa,<br>
                  Maseru 100
               </span>
             </v-col>
             <v-col>
               <h3 class="primary--text">Call Us:</h3>
               <span>+266 56 230 279 <br> +26663 209 170
               </span>
             </v-col>
           </v-row>
           <v-row>
             <v-col>
               <h3 class="primary--text">Webe Info:</h3>
               <span>www.mlexbeautyspa.co.ls<br> mlex@mlexbeautyspa.co.ls
               </span>
             </v-col>
             <v-col>
               <h3 class="primary--text">Also follow Us on:</h3>
                <div class="">
                  <div>
                    <v-btn class="" icon color="secondary">
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn class="" icon color="secondary">
                      <v-icon>mdi-whatsapp</v-icon>
                    </v-btn> 
                    <v-btn class="" icon color="secondary">
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                  </div>
               </div> 
             </v-col>
           </v-row>
         </v-col>
       </v-row>

       <v-row class="my-16 mt-12">
         <v-col lg="6" class="mt-6">
            <h1 class="primary--text my-6">Leave us message</h1>
            <v-form >
              <v-row>
                <v-col>
                  <v-text-field
                  dense
                  outlined
                  placeholder="Name"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                  dense
                  outlined
                  placeholder="Email"
                  ></v-text-field>
                </v-col>
              </v-row>
               <v-textarea
                dense
                outlined
                placeholder="Write message here"
                ></v-textarea>

                <v-btn
                large
                depressed
                color="primary"
                class="text-capitalize"
                >Send Message</v-btn>
            </v-form>
         </v-col>
         <v-col lg="6">
           <v-img
           src="@/assets/img/lemon-g61baf9fb0_1920.jpg"
           class="rounded-xl"
           ></v-img>
         </v-col>
       </v-row>
       </v-container>
     </div>
   
</div>
</template>

<script>
export default{
    name: 'Header',
    data(){
      return{
      
      }
    }
}
</script>

<style scoped>
  .section1{
    background-image: url('@/assets/img/ezgif-2-becf3b1c3f.jpg');
    background-size: cover;
    position: relative;
  }

  .section1 h1{
    font-family: 'Playfair Display', serif;
    font-size: 60px;
  }
   .section1 span{
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    
  }

 
</style>>
  