<template>
    <div class="dashboard">
        <h1 class="subheading grey--text">Dashboard</h1>
        <v-container class="my-5">
            <v-layout row class="mb-3">
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
                        <v-icon left small>folder</v-icon>
                        <span class="caption text-lowercase">By project name</span>
                    </v-btn>
                    <span>Sort projects by Project Title</span>
                </v-tooltip>
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
                        <v-icon left small>person</v-icon>
                        <span class="caption text-lowercase">By person</span>
                    </v-btn>
                    <span>Sort projects by Person</span>
                </v-tooltip>
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('due')" slot="activator">
                        <v-icon left small>calendar_today</v-icon>
                        <span class="caption text-lowercase">By due date</span>
                    </v-btn>
                    <span>Sort projects by Due Date</span>
                </v-tooltip>
            </v-layout>

            <v-card flat v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-3 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project Title</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>{{ project.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div class="right">
                        <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
                        </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
</template>

<script>

export default {
    name: 'dashboard',
    data () {
        return {
            projects: [
                { title: 'Design a new website', person: 'The Net Ninja', due: '01/01/2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Code up the homepage', person: 'Chun Li', due: '01/10/2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Design video thumbnails', person: 'Ryu', due: '12/20/2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                { title: 'Create a community forum', person: 'Gouken', due: '10/20/2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            ],
            dueDateClicked: false
        }
    },
    methods: {
        sortBy (prop) {
            if (prop == 'due') {
                if (this.dueDateClicked == false) {
                    this.projects.sort((a,b) => Date.parse(a[prop]) < Date.parse(b[prop]) ? -1 : 1)
                } else {
                    this.projects.sort((a,b) => Date.parse(a[prop]) > Date.parse(b[prop]) ? -1 : 1)
                }
                this.dueDateClicked = !this.dueDateClicked
            } else {
                this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
            }
        }
      // ASD () {
      //   window.sessionStorage.setItem('projects', this.data.projects)
      //   let projects = window.sessionStorage.getItem("projects")
      // }
    }
}
</script>

<style>

.project.complete {
    border-left: 4px solid #3cd1c2;
}
.project.ongoing {
    border-left: 4px solid orange;
}
.project.overdue {
    border-left: 4px solid tomato;
}
.v-chip.complete {
    background: #3cd1c2;
}
.v-chip.ongoing {
    background: orange;
}
.v-chip.overdue {
    background: tomato;
}

</style>

