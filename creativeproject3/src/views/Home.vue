<template>
  <div>
    <div class="wrapper">
      <div class="search">
        <form class="pure-form">
          <!-- <i class="fas fa-search"></i> -->
          <input v-model="searchText" />
        </form>
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
  }

  .search {
    border: 1px solid #ccc;
    /* border-radius: 4px; */
    width: 50%;
    background: #000000;
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
  }
</style>
