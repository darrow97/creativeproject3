<template>
  <div>
    <div class="wrapper">
      <div class="subwrap">
        <h1>Build Your Team!</h1>
        <div class="notice">
          <ul>
            <li>Select up to four mutants.</li>
            <li>Every protagonist will increase team chemistry.</li>
            <li>Every antagonist will decrease team chemistry.</li>
            <li>Every mutant will contribute to the team power level.</li>
            <li>Click on the image to add the mutant to your team.</li>
          </ul>
        </div>
        <div class="search">
          <form class="pure-form">
            <!-- <i class="fas fa-search"></i> -->
            <input v-model="searchText" placeholder="Search for a mutant" />
          </form>
        </div>
      </div>
    </div>
    <MutantList :mutants="searchedMutants" />
  </div>
</template>

<script>
// @ is an alias to /src
import MutantList from '@/components/MutantList.vue'

export default {
  name: 'Home',
  components: {
    MutantList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    searchedMutants() {
      return this.$root.$data.mutants.filter(mutant => mutant.name.toLowerCase().search(this.searchText) >= 0);    }
  }
}
</script>

<style scoped>
  .wrapper {
    background: #aaaaaa;
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow: auto; */
    /* height: 500px; */
  }

  .subwrap
  {
    display: flex;
    /* border: 1px solid green; */
    justify-content: center;
    align-content: center;
    position: relative;
    width: 700px;
    height: 150px;
  }

  .subwrap h1
  {
    text-align: center;
    position: absolute;
    border-bottom: 2px solid black;

  }

  .notice
  {
    margin-right: 15px;
  }

  .notice ul
  {
    list-style-type: decimal;
    text-align: left;
    position: absolute;
    left: 0;
    top: 50px;
    /* margin-top: -10px; */
  }

  .search {
    float: left;
    padding: 80px 0;
    position: absolute;
    right: 0;
  }

  form {
    display: table;
    width: 100%;
  }

  i {
    display: table-cell;
    padding-left: 10px;
    width: 1px;
  }

  input {
    display: table-cell;
    font-size: 20px;
    border: none !important;
    box-shadow: none !important;
    width: 100%;
    height: 40px;
    float: left;
  }
/*
  MutantList
  {
    overflow: auto;
  } */
</style>
