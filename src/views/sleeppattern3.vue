<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ChevronLeft } from "lucide-vue-next";

export default {
  name: "DailyRoutineQuestionnaire",
  components: { ChevronLeft },
  setup() {
    const router = useRouter();
    const wakeUpTime = ref(null);
    const bedTime = ref(null);
    const energyLevel = ref(null);

    const goBack = () => {
      router.go(-1);
    };

    const selectWakeUpTime = (time) => {
      wakeUpTime.value = time;
    };

    const selectBedTime = (time) => {
      bedTime.value = time;
    };

    const selectEnergyLevel = (level) => {
      energyLevel.value = level;
    };

    const goToNext = () => {
      // Save data and navigate to the next step
      router.push("/next-step");
    };

    return {
      wakeUpTime,
      bedTime,
      energyLevel,
      goBack,
      selectWakeUpTime,
      selectBedTime,
      selectEnergyLevel,
      goToNext,
    };
  },
};
</script>

<template>
  <div class="questionnaire-container">
    <div class="header">
      <button class="back-button" @click="goBack">
        <ChevronLeft size="24" />
      </button>
      <div class="title-container">
        <h1 class="title">QUESTIONNAIRE</h1>
        <p class="subtitle">Daily Routine</p>
        <div class="placeholder"></div>
      </div>
    </div>

    <div class="content">
      <div class="question-section">
        <h2 class="question">What time do you typically wake up?</h2>
        <div class="options">
          <button 
            v-for="time in ['4:00 AM - 5:00 AM', '5:00 AM - 6:00 AM', '6:00 AM - 8:00 AM', '7:00 AM - 10:00 AM']"
            :key="time" 
            class="option-button" 
            :class="{ 'selected': wakeUpTime === time }"
            @click="selectWakeUpTime(time)"
          >
            {{ time }}
          </button>
        </div>
      </div>

      <div class="question-section">
        <h2 class="question">What time do you usually go to bed?</h2>
        <div class="options">
          <button 
            v-for="time in ['9:00 - 11:00 PM', '11:00 - 12:00 PM', '12:00 - 1:00 AM', '1:00 - 2:00 AM']"
            :key="time" 
            class="option-button" 
            :class="{ 'selected': bedTime === time }"
            @click="selectBedTime(time)"
          >
            {{ time }}
          </button>
        </div>
      </div>

      <div class="question-section">
        <h2 class="question">How would you describe your daily energy levels?</h2>
        <div class="options">
          <button 
            v-for="level in ['Low', 'Moderate', 'High']"
            :key="level" 
            class="option-button" 
            :class="{ 'selected': energyLevel === level }"
            @click="selectEnergyLevel(level)"
          >
            {{ level }}
          </button>
        </div>
      </div>

      <div class="pagination">
        <div class="indicators">
          <div class="indicator active"></div>
          <div class="indicator"></div>
          <div class="indicator"></div>
        </div>
        <button class="next-button" @click="goToNext">NEXT</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.questionnaire-container {
    display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

}

.header {
    display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.back-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  color: black;
}

.title-container {
  text-align: center;
  flex-grow: 1;
  color: black;
}

.title {
    font-size: 18px;
  font-weight: 800;
  margin: 0;
  color: #000;
}

.subtitle {
    font-size: 14px;
  color: #000000;
  margin: 4px 0 0 0;
}
.placeholder {
  width: 40px;
}
.content {
    flex: 1;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
}

.question-section {
  margin-bottom: 32px;
}

.question {
    font-size: 15px;
  font-weight: 600;
  margin: 0 0 16px 0;
  line-height: 1.4;
  color: #000;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-button {
    padding: 12px 16px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  background-color: #e0e0e0;
  color: #000;
  transition: background-color 0.2s, color 0.2s;
  width: auto;
  align-self: flex-start;
}

.option-button.selected {
  background-color: #FFA500;
  color: black;
}

.pagination {
    margin-top: 24;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
}

.indicators {
  display: flex;
  gap: 8px;
}
.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #e0e0e0;
}

.indicator.active {
  background-color: #FFA500;
}


.next-button {
    background-color: #FFA500;
  color: #000;
  border: none;
  border-radius: 50px;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
