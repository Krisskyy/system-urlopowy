<template>
  <div class="content-request">
    <div class="request-header flex justify-between items-center">
      <h1>Wnioski</h1>
      <a href="#" class="flex items-center">
        Historia wniosków
        <img src="src/assets/next-icon.svg" alt="next-icon" />
      </a>
    </div>
    <div class="content-boxes flex justify-between">
      <RequestBoxComponent
        v-for="(title, index) in boxes"
        :key="index"
        :box="title"
      />
    </div>
  </div>
  <div class="content-vacation">
    <h1>Nadchodzące urlopy pracowników</h1>
    <div class="vacation-header">
      <table></table>
      <div class="buttons">
        <tr>
          <th>TYP WNIOSKU</th>
          <th>PRACOWNIK</th>
          <th>STANOWISKO</th>
        </tr>
        <tr>
          <td>
            <q-select
              dense
              outlined
              bg-color="white"
              class="vacation-select"
              v-model="modelFirst"
              :options="options"
              multiple
              emit-value
              map-options
            >
              <template
                v-slot:option="{ itemProps, opt, selected, toggleOption }"
              >
                <q-item v-bind="itemProps">
                  <q-item-section>
                    <q-checkbox
                      :label="opt.label"
                      :model-value="selected"
                      @update:model-value="toggleOption(opt)"
                    />
                  </q-item-section>
                </q-item>
              </template>
              <template v-slot:selected>
                {{ computedSelectedLabelFirst }}
              </template>
            </q-select>
          </td>
          <td>
            <q-select
              dense
              outlined
              bg-color="white"
              class="vacation-select"
              v-model="modelSecond"
              :options="optionsSecond"
              multiple
              emit-value
              map-options
            >
              <template
                v-slot:option="{ itemProps, opt, selected, toggleOption }"
              >
                <div style="width: 300px">
                  <q-input
                    v-model="text"
                    label="Wyszukaj"
                    style="padding: 3px"
                    v-show="opt.input"
                  >
                    <template v-slot:append>
                      <q-icon name="search" style="margin-right: 5px" />
                    </template>
                  </q-input>
                  <q-item v-bind="itemProps">
                    <q-item-section>
                      <q-checkbox
                        :label="opt.label"
                        :model-value="selected"
                        @update:model-value="toggleOption(opt)"
                      />
                    </q-item-section>
                  </q-item>
                </div>
              </template>
              <template v-slot:selected>
                {{ computedSelectedLabelSecond }}
              </template>
            </q-select>
          </td>
          <td>
            <q-select
              dense
              outlined
              bg-color="white"
              class="vacation-select"
              v-model="modelThird"
              :options="options"
              multiple
              emit-value
              map-options
            >
              <template
                v-slot:option="{ itemProps, opt, selected, toggleOption }"
              >
                <q-item v-bind="itemProps">
                  <q-item-section>
                    <q-checkbox
                      :label="opt.label"
                      :model-value="selected"
                      @update:model-value="toggleOption(opt)"
                    />
                  </q-item-section>
                </q-item>
              </template>
              <template v-slot:selected>
                {{ computedSelectedLabelThird }}
              </template>
            </q-select>
          </td>
        </tr>
        <div class="filter-buttons flex justify-end">
          <q-btn class="buttonFirst" flat label="Wyczyść filtry" />
          <q-btn
            outline
            style="color: #703ada"
            label="Filtruj"
            class="buttonSecond"
          />
        </div>
        <div class="vacation-component">
          <VacationComponent />
          <VacationComponent />
          <VacationComponent />
          <VacationComponent />
          <VacationComponent />
          <VacationComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RequestBoxComponent from "src/components/Main/RequestBoxComponent.vue";
import VacationComponent from "src/components/Main/VacationComponent.vue";
import { ref, computed } from "vue";

const boxes = [
  {
    title: "Oczekujące",
    color: "#FFD688",
  },
  {
    title: "Zaakceptowane",
    color: "#66DDB3",
  },
  {
    title: "Odrzucone",
    color: "#FF8C8C",
  },
];

const modelFirst = ref([]);
const modelSecond = ref([]);
const modelThird = ref([]);
const text = ref([]);

const options = [
  {
    label: "Urlop wypoczynkowy",
  },
  {
    label: "Urlop na żądanie",
  },
  {
    label: "L4",
  },
  {
    label: "Urlop wychowawczy",
  },
  {
    label: "Urlop macierzyński",
  },
  {
    label: "Urlop okolicznościowy",
  },
];

const optionsSecond = [
  {
    label: "Zaznacz wszystkich",
    input: true,
    click: "toggleAllCheckboxes",
  },
  {
    label: "Karolina Nowak1",
    input: false,
    click: "",
  },
  {
    label: "Jan Kowalski1",
    input: false,
    click: "",
  },
  {
    label: "Karolina Nowak2",
    input: false,
    click: "",
  },
  {
    label: "Jan Kowalski2",
    input: false,
    click: "",
  },
  {
    label: "Karolina Nowak3",
    input: false,
    click: "",
  },
  {
    label: "Jan Kowalski3",
    input: false,
    click: "",
  },
];

const computedSelectedLabelFirst = computed(() => {
  return `Wybrano: ${modelFirst.value.length}`;
});
const computedSelectedLabelSecond = computed(() => {
  return `Wybrano: ${modelSecond.value.length}`;
});
const computedSelectedLabelThird = computed(() => {
  return `Wybrano: ${modelThird.value.length}`;
});
</script>

<style lang="scss" scoped>
.content-request {
  height: 85vh;
  background-color: $classic;
  margin: 30px 40px;
  border-radius: 10px;
  padding: 30px 40px;

  .request-header {
    margin-bottom: 30px;

    h1 {
      font: normal normal 500 28px/36px Poppins;
      color: #111111de;
    }

    a {
      text-decoration: none;
      color: $button;
      font: normal normal 600 16px/25px Poppins;

      img {
        margin-left: 20px;
      }
    }
  }
}

.content-vacation {
  background-color: $classic;
  margin: 30px 40px 0 40px;
  border-radius: 10px;
  padding: 30px 40px;

  h1 {
    font: normal normal 500 28px/42px Poppins;
    color: #111111de;
  }

  th {
    font: normal normal 500 14px/21px Poppins;
    text-transform: uppercase;
    text-align: left;
  }

  th,
  td {
    padding: 5px;
  }

  .vacation-select {
    font: normal normal 500 14px/21px Poppins;
    width: 175px;
    height: 36px;
  }

  .buttonFirst {
    font: normal normal 600 14px/16px Poppins;
    color: #703ada;
    margin-right: 20px;
    text-decoration: none;
  }
  .buttonSecond {
    font: normal normal 600 14px/16px Poppins;
    padding: 10px 24px;
  }

  .vacation-component {
    width: 100%;
    background: $background 0% 0% no-repeat padding-box;
    border-radius: 4px;
    margin-top: 38px;
    padding: 25px 20px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
  }
}
</style>
