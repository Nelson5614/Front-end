<template>
     <div class="cta py-12">
      <v-row class=" text" justify="center">
        <v-col lg="6"
        >
          <div 
          class="mx-auto mb-12 text-center"
          max-width="574"
          flat
          >
          <div>
          <!-- <v-img
          src="../assets/img/Screenshot_20220215-185207_Office-removebg-preview.png"
          height="80"
          width="80"
          class="ml-16"
          ></v-img> -->
          </div>
          <h1 class="primary--text">Want to get latest updates and offers?</h1>
          <h3>Subscribe To Our Newsletter Right Now</h3>
          <v-form>
            <v-row>
              <v-col
              lg="12"
              class="mt-8"
              >
                <v-text-field
                  outlined
                  dense
                  label="Enter your Email here"
                  prepend-inner-icon="mdi-email"
                  class="mx-8 rounded-xl"
                >
                </v-text-field>
              <div class=" mt-n1 mr-7 d-flex justify-end">
                <v-btn 
                large
                color="primary"
                class="white--text caption text-capitalize rounded-xl mt-n16"
                >
                  Subscribe
                </v-btn>
              </div>
              </v-col>
            </v-row>
          </v-form>
          </div>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
  .cta{
  position:relative ;
  background-color: gainsboro;
  background-size: cover;
  height: 100%;
}
</style>