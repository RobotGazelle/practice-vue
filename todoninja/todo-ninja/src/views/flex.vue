<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 md6 >
          <v-btn outline block class="primary">1</v-btn>
        </v-flex>
        <v-flex xs4 md2 >
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2 >
          <v-btn outline block class="primary">3</v-btn>
        </v-flex>
        <v-flex xs4 md2 >
          <v-btn outline block class="primary">4</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs4 md3>
          <v-btn outline block class="success">5</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="success">6</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
    name: 'dashboard'
}
</script>
