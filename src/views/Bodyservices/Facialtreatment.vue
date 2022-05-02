
<template>
<div>
     <div class="section1 pt-16 pl-16 py-16">
       <div class="ml-16">
       <h1 class="primary--text">Facial Treatment</h1>
       <p class="white--text">Mlex Beauty Spa is the best <br> beauty spa you can find in town. Enjoy!</p>
       <span class="white--text">Home - Body-Services - Facial-Treatment</span>
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
     <v-container class="py-16 mt-12">
         <v-row>
             <v-col lg="8">
                 <v-img
                 src="@/assets/img/cupping.jpg"
                 class="rounded-xl"
                 ></v-img>
             </v-col>
             <v-col lg="4">
                 <h1 class="primary--text">Our Body Services</h1>
                 <v-list v-for="bodyservice in bodyservices" :key="bodyservice.title">
                     <v-list-item link :to="bodyservice.route">
                         <v-col>
                             <span> {{ bodyservice.tittle }} </span> <br>
                             <v-divider/>
                         </v-col>
                         
                     </v-list-item>
                 </v-list>
             </v-col>
         </v-row>
         <v-row class="my-16">
             <v-col lg="8" class="">
             <h1 class="primary--text py-2">What is Facial Treatment?</h1>
             <h3 class="font-weight-bold ">Sports masages are important mainly for athlets</h3>
             <p>Sports massage is manual manipulation of the muscles geared specifically toward helping people who have physically demanding lifestyles and/or hobbies. This kind of therapeutic massage considers the impact of certain activities on specific joints, muscle groups, tendons, ligaments, and soft tissue groups. The conscious focus of sports massage therapy maximizes the benefit of certain massage techniques and supports further physical exertion and activity. An initial assessment is used to create a specially informed massage therapy plan that will meet each individual athlete’s specific needs.</p>
             </v-col>
             <v-col lg="4">
                 <v-img
                 src="@/assets/img/spasider.jpg"
                 class="rounded-xl"
                 height="400"
                 cover
                 ></v-img>
             </v-col>
         </v-row>

         <v-row>
             <v-col lg="8">
                 <h1 class="primary--text my-4">How Facial Treatment works!</h1>
                 <v-row>
                    <v-img
                    src="https://template.hasthemes.com/peerly-v1/peerly/assets/images/services/therapy-video.webp"
                    class="rounded-xl"
                    ></v-img>
                    <v-btn
                    text
                    color="primary white--text"
                    class="my-4"
                    large
                    >
                            <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                            Watch Video
                    </v-btn>

                    <h4 class="font-weight-bold mt-6">Facial Treatment</h4>
                </v-row>
             </v-col>
         </v-row>
         <v-row>
             <v-col lg="8">
             <h1 class="primary--text">Benefits</h1>
             <p>Why would someone choose this kind of athletic therapy when there are so many other kinds of massages available? Activities such as athletic games, official sports, and intense exercise can be hard on the body. This means choosing the right kind of massage method for an active lifestyle and body. The purpose of a deep tissue massage, for example, is to treat chronic pain and on-going tension. This might be beneficial in a very general sense, but sports massage therapy is specifically designed to support and enhance the performance, recovery, and relaxation of people (typically athletes) who are frequently and/or intensely physically active.</p>
             </v-col>
         </v-row>
     </v-container>
     
</div>   
</template>

<script>
export default {
       data(){
      return{
        
         bodyservices:[
                {tittle:'Breasts Lifting', route:'breasts-lifting'},
                {tittle:'Butt Enlargement', route:'butt-enlargement'},
                {tittle:'Foot Detox', route:'foot-detox'},
                {tittle:'Tummy Reduction',route:'tummy-reduction'},
                
                
            ]
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

   h1{
    font-family: 'Playfair Display', serif;
    font-size: 40px;
  }
   .section1 span{
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    
  }
</style>