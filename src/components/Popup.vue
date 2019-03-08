<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="success">Add new project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <!-- w Vue używamy pola v-text-field zamiast pola input  -->
          <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>
          <!-- date picker  -->
          <v-menu>
            <v-text-field
              :value="formattedDate"
              slot="activator"
              label="Due date"
              prepend-icon="date_range"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <!-- date picker  -->
          <v-spacer></v-spacer>
          <v-btn flat class="success mx-0 mt-3" @click="submitka">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null
    };
  },
  methods: {
    submitka() {
      // eslint-disable-next-line
      console.log(this.title, this.content);
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "do MMM YYYY") : "";
    }
  }
};
</script>
