<template>

    <div class="wrapper">
      <div class="subwrap">
        <h1>The Scenarios</h1>
        <div class="notice">
          <ul>
            <li>Here is a list of missions your team can face.</li>
            <li>To accept a mission, click on the "Accept this mission" button.</li>
            <li>Your team's fate will appear above the button.</li>
            <li>If you change your team, the fate of your previous team will still be visible. Can your new team succeed where the other failed?</li>
            <li>BE AWARE: If your team chemistry score does not meet the recommended level, there could be repercussions!</li>
          </ul>
        </div>
        <div class="search">
          <form class="pure-form">
            <!-- <i class="fas fa-search"></i> -->
            <input v-model="searchText" placeholder="Search for a scenario" />
          </form>
        </div>
        <ScenariosList :scenarios="searchedScenarios" />
      </div>
    </div>


  <!-- <div v-else class="empty">
    <p>Your team is yet to be built, unify the others!</p>
  </div> -->
</template>

<script>
// @ is an alias to /src
import ScenariosList from '@/components/ScenariosList.vue'

export default {
  name: 'Scenarios',
  components: {
    ScenariosList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    searchedScenarios() {
      return this.$root.$data.scenarios.filter(scenario => scenario.name.toLowerCase().search(this.searchText) >= 0);
    }
  }
}
</script>

<style scoped>
  /* .wrapper {
    background: #aaaaaa;
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  /* .subwrap
  {
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    width: 700px;
    height: 150px;
  } */

  /* .subwrap h1
  {
    text-align: center;
    position: absolute;
    border-bottom: 2px solid black;
  } */

  /* .notice
  {
    margin-right: 15px;
  } */

  ul
  {
    list-style-type: decimal;
    text-align: left;
    /* position: absolute; */
    justify-content: center;
    /* left: 0; */
    top: 200px;
    margin-left: 500px;
  }

  .search {
  }


</style>
