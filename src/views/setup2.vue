<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

export default {
  name: "ProfileSetup",
  components: { ChevronLeft, ChevronRight },
  setup() {
    const router = useRouter();
    const currentStep = ref(2);
    const totalSteps = ref(3);
    
    // Profile data
    const gender = ref("Man");
    const weight = ref(47);
    const height = ref(184);
    
    // Calculate visible options for weight and height
    const getVisibleRange = (current, min, max) => {
      const range = [];
      for (let i = current - 2; i <= current + 2; i++) {
        if (i >= min && i <= max) {
          range.push(i);
        }
      }
      return range;
    };
    
    const visibleWeights = computed(() => getVisibleRange(weight.value, 1, 200));
    const visibleHeights = computed(() => getVisibleRange(height.value, 1, 1000));
    
    const goBack = () => {
      router.go(-1);
    };
    
    const selectGender = (selected) => {
      gender.value = selected;
    };
    
    const adjustWeight = (direction) => {
      if (direction === 'decrease' && weight.value > 1) {
        weight.value--;
      } else if (direction === 'increase' && weight.value < 200) {
        weight.value++;
      }
    };
    
    const adjustHeight = (direction) => {
      if (direction === 'decrease' && height.value > 1) {
        height.value--;
      } else if (direction === 'increase' && height.value < 1000) {
        height.value++;
      }
    };
    
    const goToNext = () => {
      router.push("/next-step");
    };
    
    return {
      currentStep,
      totalSteps,
      gender,
      weight,
      height,
      visibleWeights,
      visibleHeights,
      goBack,
      selectGender,
      adjustWeight,
      adjustHeight,
      goToNext
    };
  },
};
</script>

<template>
  <div class="setup-container">
    <button class="back-button" @click="goBack">
      <ChevronLeft size="24" color="#000" />
    </button>
    
    <div class="illustration-container">
      <img src="./assets/setup.png" alt="Person doing yoga" class="illustration" />
    </div>
    
    <div class="profile-form">
      <div class="form-group">
        <label class="form-label">Gender</label>
        <div class="option-buttons">
          <button 
            class="option-button" 
            :class="{ 'selected': gender === 'Man' }"
            @click="selectGender('Man')"
          >
            Man
          </button>
          <button 
            class="option-button" 
            :class="{ 'selected': gender === 'Women' }"
            @click="selectGender('Women')"
          >
            Women
          </button>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Weight, kg</label>
        <div class="number-selector">
          <button class="selector-button" @click="adjustWeight('decrease')">
            <ChevronLeft size="20" />
          </button>
          
          <div class="number-options">
            <template v-for="(option, index) in visibleWeights" :key="'weight-'+option">
              <span 
                class="number-option" 
                :class="{ 
                  'selected': weight === option,
                  'adjacent': Math.abs(visibleWeights.indexOf(weight) - index) === 1
                }"
              >
                {{ option }}
              </span>
            </template>
          </div>
          
          <button class="selector-button" @click="adjustWeight('increase')">
            <ChevronRight size="20" />
          </button>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Height, cm</label>
        <div class="number-selector">
          <button class="selector-button" @click="adjustHeight('decrease')">
            <ChevronLeft size="20" />
          </button>
          
          <div class="number-options">
            <template v-for="(option, index) in visibleHeights" :key="'height-'+option">
              <span 
                class="number-option" 
                :class="{ 
                  'selected': height === option,
                  'adjacent': Math.abs(visibleHeights.indexOf(height) - index) === 1
                }"
              >
                {{ option }}
              </span>
            </template>
          </div>
          
          <button class="selector-button" @click="adjustHeight('increase')">
            <ChevronRight size="20" />
          </button>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <div class="indicators">
        <div class="indicator active"></div>
        <div class="indicator active"></div>
        <div class="indicator"></div>
      </div>
      
      <button class="next-button" @click="goToNext">
        NEXT
      </button>
    </div>
  </div>
</template>

<style scoped>
.setup-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  position: relative;
}

.back-button {
  position: absolute;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 8px;
  color: #000;
}

.illustration-container {
  position: relative;
  width: 100%;
  height: 45vh;
  overflow: hidden;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  background-color: #f5f5f5;
}

.illustration {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-form {
  padding: 24px 20px;
  flex: 1;
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 12px;
  display: block;
}

.option-buttons {
  display: flex;
  gap: 12px;
}

.option-button {
  flex: 1;
  padding: 12px 16px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  background-color: #e0e0e0;
  color: #000;
  transition: background-color 0.2s;
}

.option-button.selected {
  background-color: #ffb800;
  color: #000;
}

.number-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.selector-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  
}

.number-options {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.number-option {
  font-size: 16px;
  color: #999;
  transition: all 0.2s;
}

.number-option.selected {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  background-color: #ffb800;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.number-option.adjacent {
  font-size: 18px;
  color: #666;
}

.footer {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-color: #ffb800;
}

.next-button {
  background-color: #ffb800;
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