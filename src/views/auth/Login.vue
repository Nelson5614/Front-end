<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col lg="12">
                <v-card
                max-width="500"
                class="mx-auto my-12"
                outlined
                >
                    <p v-if="loading" >Loading</p>
                    <p v-if="error" class="red--text text-center mt-2">{{error}}</p>
                    <v-card-title class="my-4 d-flex justify-center">Login To MlexBeautySpa</v-card-title>
                    
                    <v-form>
                        <v-text-field
                        label="Username or Email"
                        class=" mt-4 mx-16"
                        outlined
                        dense
                        prepend-inner-icon="mdi-account"
                        v-model="email"
                        >
                        
                        </v-text-field>
                        <v-text-field
                        prepend-inner-icon="mdi-lock"
                        label="Password"
                        dense
                        class="mx-16"
                        outlined
                        v-model="password"
                        >
                        </v-text-field>
                    </v-form>
                    <v-btn
                    style="width: 370px"
                    class="rounded-xl primary white--text d-flex mx-auto text-capitalize"
                    medium
                    dense
                    outlined
                    @click="login"
                    >
                        Continue with Email
                    </v-btn>
                    <span class="d-flex justify-center my-3">or</span>
                    <v-btn
                    style="width: 370px"
                        class="rounded-xl blue white--text d-flex mx-auto mb-12 text-capitalize"
                        medium
                        dense
                        outlined
                        
                        >
                        Continue with Google
                    </v-btn>
                    <v-divider/>
                    <span class="d-flex justify-center my-6 font-weight-light font-italic text--disabled">Don't have mlexbeautyspa account?</span>
                     <v-btn
                        style="width: 270px"
                        class="rounded-xl primary--text d-flex mx-auto mb-12 text-capitalize"
                        medium
                        dense
                        outlined
                        to="/register"
                        >
                        Sign-up
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            user:{
                email:null,
                password:null
            },
            loading:false,
            error:null
        }
    },

    methods:{
        async login(){
            this.error=null;

            try{
                await this.$store.dispatch('login', this.user)
                await this.$router.push({name: 'about'});
            } catch(error){
                this.error = error;
            } finally{
                this.loading=false;
            }

        }
    }
}
</script>