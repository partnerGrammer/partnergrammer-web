<style scoped>

    .main-container-articles *{
        padding: 0;
        margin: 0;
    }

    .container-article {
        background-color: #949A9D;
        width: 100%;
        padding-top: 100%; /* 1:1 Aspect Ratio */
        position: relative; /* If you want text inside of it */
    }

    /* If you want text inside of the container */
    .container-article img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 50%;
    }

    .projects{
        cursor: pointer;
    }

    .controls{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
    }

    .controls .control:nth-child(1){
        margin-right: 10px;
    }

    .control{
        background-color: #EE1331;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
    }

    .control:hover{
        background-color: #B9051D;
    }

    .control i{
        color: white;
    }
</style>

<template>
    <section class="main-container-articles">
        <!-- seccion 1 -->
        <section class="row">
            <div class="col-md-4 projects" style="padding: 10px;" v-for="(item, index) in projects" :key="index" @click="goToProject(item.id)">
                <article>
                    <div class="container-article">
                        <img :src="item.logo" width="100px" alt="">
                    </div>
                </article>
            </div>
        </section>

        <!-- seccion 2 -->
        <section class="row">
            <div class="col-md-12 controls">
                <div v-show="count != 1" class="control" @click="count--">
                    <i class="fas fa-arrow-left"></i>
                </div>
                <div v-show="count != lastPage" class="control" @click="count++">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Project',

    data(){
        return{
            projects: [],
            count: 1,
            lastPage: null
        }
    },

    mounted(){
        this.getProjects()

    },

    watch:{
        count(){
            this.getProjects()
        }
    },

    methods: {
        goToProject(args){
            this.$router.push({ name: 'Project', params: { id: args } })
        },

        async getProjects(){
            try {
                this.projects = []
                let URL = `/api/projects?page=${this.count}`
                let response = await axios.get(URL)

                if (response) {
                    console.log(response.data)
                    this.lastPage = response.data.last_page
                    response.data.data.forEach(element => {
                        this.projects.push(element)
                    });
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

