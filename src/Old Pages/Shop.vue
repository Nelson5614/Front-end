<template>
<div>
    <div class="section1 pt-16 pl-16 py-16">
       <div class="ml-16">
       <h1 class="primary--text">Let's Shop</h1>
       <p class="white--text">Mlex Beauty Spa is the best <br> beauty spa you can find in town. Enjoy!</p>
       <span class="white--text">Home - Shop</span>
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
     <div class="items py-16">
        <v-container>
          <p class="text-center my-8 display-1 text--disabled">Featured Products</p>
         <v-row align="center" >
           <v-col lg="4" v-for="item in items" :key="item.tittle">
             <v-list class="d-flex align-center">
               <v-list-item 
               link
               :to="item.route"
               >
                 <v-card
                  class="mx-auto mb-6"
                  max-width="344"
                  max-height="544"
                  >
                    <v-img
                      src="../assets/img/ezgif-2-55a0043f2b.jpg"
                      height="200px"
                    ></v-img>
                    <v-card-title class="mx-4">
                      <h3 class="primary--text">{{ item.tittle }}</h3>
                    </v-card-title>
                    <v-row class="mt-2 mx-4 mt-n6">
                      <v-col lg="6">
                        <h4 class=" mt-1 ml-2 font-weight-light">Price: {{item.price}}</h4>
                      </v-col>
                      <v-col lg="6" >
                      <h4 class=" mt-1 font-weight-light text-decoration-underline">Rating:{{item.rating}}</h4>
                      </v-col>
                    </v-row>
                  </v-card>
               </v-list-item>
             </v-list>
              
           </v-col>
         </v-row>
       </v-container>
        </div> 
</div>
</template>
<script>
export default {
    data(){
        return{
            items:[
                {tittle:'Mpesu Libido Buster', price:'M50.00', rating:'4.8',route:'mpesu'},
                {tittle:'Flat Tummy Solution', price:'M100.00', rating:'4.9',route:'flat-tummy-solutions'},
                {tittle:'Guava Leaves', price:'M50.00', rating:'5.0',route:'guava-leaves'}
            ]
        }
    }
}
</script>
<style scoped>
  .section1{
    background-image: url('../assets/img/ezgif-2-becf3b1c3f.jpg');
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
.items h3{
   font-family: 'Playfair Display', serif; 
}
</style>