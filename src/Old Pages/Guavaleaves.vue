<template>
<div>
     <div class="section1 pt-16 pl-16 py-16">
       <div class="ml-16">
       <h1 class="primary--text">Guava Leaves</h1>
       <p class="white--text">Mlex Beauty Spa is the best <br> beauty spa you can find in town. Enjoy!</p>
       <span class="white--text">Home - Shop - Guava-Leaves</span>
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
      <div>
      <v-container>
        <v-row class="mt-12 mx-16" justify="center" align="center">
 
          <v-col
          lg="6"
          >
          <v-card
          outlined
          class="pa-8 rounded-xl"
          height="480"
          width="400"
          >
          <v-img
          src="../assets/img/image.jpg"
          class="rounded-xl"
          ></v-img>
          </v-card>
          </v-col>
          <v-col
          lg="6"
          >
          <h1 class="primary--text mt-n12" >Guava - Leaves</h1>
          <v-row class="">
            <div class="ml-3 ma-4">
              <strong class="display-1 font-weight-bold">M50.00</strong>
            </div>
            <div class="ma-4">
              <v-rating
              value="5"
              size="22"
              ></v-rating>
            </div>
          </v-row>
          <p class="font-weight-light pt-4">Hair fall is a result of an unhealthy scalp. Guava leaves can help stop hair fall and strengthen it. Get this 50g bag for the price mention above and start to seeing an absolute change</p>

          <v-row class="ml-1">
          <strong class="headline font-weight-bold">Stock:</strong>
          <strong class="headline font-weight-bold primary--text">Instock</strong>
          </v-row>
          </v-col>
        </v-row>

        <v-row class="py-16">
          <v-col lg="6" class="mt-8">
            <div class="ml-6">
              <v-chip  class="mx-4" @click="activeitem ='discription'" :color="activeitem === 'discription'? 'primary':''">Description</v-chip>

              <v-chip  class="mx-4" @click="activeitem ='information'" :color="activeitem === 'information'? 'primary':''">Information</v-chip>

              <v-chip  class="mx-4" @click="activeitem ='reviews'" :color="activeitem === 'reviews'? 'primary':''">Reviews</v-chip>
            </div>
            <slot v-if="activeitem === 'discription'">
              <v-col lg="12">
                <p class="ml-6 font-weight-light mt-4">Hair fall is a result of an unhealthy scalp. Guava leaves can help stop hair fall and strengthen your scalp because of their anti-inflammatory, antimicrobial and antioxidant properties. It is also being used in scalp related problems and dandruff. <br> <br>

                It is also rich in vitamin B & C that helps in nourishing and aids in hair growth. So if you have a guava tree in your garden, then don’t pile up those leaves or burn it, instead make it a point to make a paste out of it and gently apply it on your scalp. This will fight hair fall and help strengthen your scalp..</p>
              </v-col>
            </slot>
            <slot v-if="activeitem === 'information'">
              <v-col lg="12">
                <v-row class="ml-6 font-weight-light mt-4">
                  <v-col class="font-weight-bold">Label:</v-col>
                  <v-col class="font-weight-bold">Guava-Leaves</v-col>
                </v-row>
                <v-divider/>
                <v-row class="ml-6 font-weight-light mt-4" >
                  <v-col class="font-weight-bold">Weight:</v-col>
                  <v-col class="font-weight-bold">50 grams</v-col>
                </v-row>
                <v-divider/>
                <v-row class="ml-6 font-weight-light mt-4">
                  <v-col class="font-weight-bold">Price:</v-col>
                  <v-col class="font-weight-bold"> 50 Maloti</v-col>
                </v-row>
                <v-divider/>
              </v-col>
            </slot>
            <slot v-if="activeitem === 'reviews'">
              <v-col lg="12">
                <p class="ml-6 font-weight-bold mt-4">0 Reviews</p>
              </v-col>
            </slot>
            </v-col>
          <v-col>
            <v-img
            src="../assets/img/ezgif-2-55a0043f2b.jpg"
            max-height="400"
            class="rounded-xl"
            ></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-subheader
           class="display-1 primary--text text-center font-weight-bold"
           > Related Products</v-subheader>
        </v-row>
           <v-row wrap>
           <v-col lg="4" >
             <v-list class="d-flex">
               <v-list-item 
               link
               v-for="item in items" :key="item.tittle"
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
                        <h4 class="secondary--text mt-1 ml-2 font-weight-light">Price: {{item.price}}</h4>
                      </v-col>
                      <v-col lg="6" >
                      <h4 class="secondary--text mt-1 font-weight-light text-decoration-underline">Rating:{{item.rating}}</h4>
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
        activeitem:'discription',
         items:[
                {tittle:'Flat Tummy Solution', price:'M100.00', rating:'4.9',route:'flat-tummy-solutions'},
                {tittle:'Mpesu Libido Buster', price:'M50.00', rating:'4.8',route:'mpesu'},
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
    font-size: 40px;
  }
   .section1 span{
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    
  }
</style>