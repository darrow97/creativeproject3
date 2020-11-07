<template>
  <div v-if="checkTeamSize" >
    <div class="wrapper">
      <div class="subwrap">
        <h1>Your Team</h1>
        <div class="teamInfo">
          <h2>
            Team Chemistry: {{teamChemistry}} -
            Team Power Level: {{teamPower}}
           </h2>
        </div>
        <div class="note">
          <h3>*Click on a mutant image to remove them from the team*</h3>
        </div>
      </div>
    </div>
    <TeamList :team="searchedMutants" />
  </div>
  <div v-else class="empty">
    <p>Your team is yet to be built, unify the others!</p>
  </div>
</template>

<script>
// @ is an alias to /src
import TeamList from '@/components/TeamList.vue'

export default {
  name: 'Team',
  components: {
    TeamList
  },
  data() {
    return {
      searchText: '',
    }
  },
  method: {
    removeFromTeam: function(mutant)
    {
      var id = mutant.id;
      var size = this.$root.$data.team.length;
      console.log(mutant);

      for(var i = 0; i < size; i++)
      {
        if(this.$root.$data.team[i].id === id)
        {
          this.$root.$data.team.splice(i, i+1);
          break;
        }
      }

      return mutant;
    }
  },
  computed: {
    checkTeamSize: function()
    {
      var size = this.$root.$data.team.length;
      console.log(size);
      if(size > 0) return true;
      return false;
    },
    searchedMutants() {
      return this.$root.$data.team.filter(mutant => mutant.name.toLowerCase().search(this.searchText) >= 0);
    },
    teamChemistry()
    {
      var team = this.$root.$data.team;
      var size = team.length;
      var chemistryScore = 0;
      var same = true;
      var attribute = team[0].affinity;
      //  same affinity bonus
      for(var i = 0; i < size; i++)
      {
        if(attribute !== team[i].affinity)
        {
          same = false;
          break;
        }
      }
      if(same) chemistryScore += 3 * size + 3;
      else chemistryScore += 3 * size - 2;
      // this.$root.$data.levels.push(chemistryScore);
      return chemistryScore;
    },
    teamPower()
    {
      var team = this.$root.$data.team;
      var size = team.length;
      var same = true;
      var attribute = team[0].affinity;
      var teamPower = 0;
      //  add the base power levels from each mutant
      for(var i = 0; i < size; i++)
      {
        teamPower += team[i].level;
      }
      //  detemine a team chemistry bonus
      for(i = 0; i < size; i++)
      {
        if(attribute !== team[i].affinity)
        {
          same = false;
          break;
        }
      }
      if(same) teamPower += 5;
      else teamPower -= 1;
      // this.$root.$data.team.push(teamPower);
      return teamPower;
    }
  },

}
</script>

<style scoped>
  .wrapper {
    background: #aaaaaa;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .empty {
    text-align: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
    font-size: 30px;
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

  .teamInfo
  {
    position: absolute;
    top: 50px;
    display: flex;
    border-bottom: 1px solid black;
  }

  .teamInfo h2
  {
    margin-left: 7px;
    margin-right: 7px;
  }

  .note
  {
    position: absolute;
    justify-content: center;
    bottom: 0;
  }

  .note h3
  {
    font-size: 14px;
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
