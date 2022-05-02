<template>
<div>
     <div class="section1 pt-16 pl-16 py-16">
       <div class="ml-16">
       <h1 class="primary--text">Our Blog</h1>
       <p class="white--text">Mlex Beauty Spa is the best <br> beauty spa you can find in town. Enjoy!</p>
       <span class="white--text">Home - Blog</span>
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
     <div class="blog-posts py-16">
       <v-container>
         <v-row>
           <v-col lg="4" v-for="blog in blogs" :key="blog">
              <v-card
              flat
              class="mx-auto"
              max-width="344"
              >
                <v-img
                  src="@/assets/img/ezgif-2-55a0043f2b.jpg"
                  height="200px"
                ></v-img>
                <v-row class="mt-2 mx-4">
                  <v-col lg="6" class="d-flex">
                    <v-icon color="primary">mdi-calendar-month</v-icon>
                    <h4 class="primary--text mt-1 ml-2">20, Aug 2022</h4>
                  </v-col>
                  <v-col lg="6" class="d-flex">
                    <v-icon color="primary">mdi-account</v-icon>
                    <h4 class="primary--text mt-1 ml-2">Admin</h4>
                  </v-col>
                </v-row>
                <v-card-title class="mx-4">
                  <h3>{{ blog.tittle }}</h3>
                </v-card-title>
              </v-card>
           </v-col>
         </v-row>
       </v-container>
     </div>
</div>
</template>

<script>
  import repository from '@/api/repository';
export default{
    data(){
      return{
          blogs:[
            {tittle:'Importance of foot detox'},
            {tittle:'Hot stone massages'},
            {tittle:'How tummy reduction works'},
            {tittle:'Know more about guava leaves flat tummy solutions'}
          ],

          posts: null,
          error:null
      }
    },

    async mounted() {
      try{
        let {data} = await repository.getData();
        this.posts = data;
      } catch(error){
        this.error = error;
      }
    },
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
.blog-posts h3{
  font-family: 'Playfair Display', serif;
  font-size: 20px;
}

</style>>
  