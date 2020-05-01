<template>
  <b-container class="container">
    <h2>Stworz CV w czterech prostych krokach!</h2>
    <p>Utwórz konto i się zaloguj.</p>
    <p>Wprowadź dane do swojego CV</p>
    <p>Wybierz jeden z dostępnych szablonów</p>
    <p>Pobierz swoje nowe CV</p>
    <br />
    <br />

    <!-- Login Form -->
    <b-form v-if="showLoginForm">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button type="button" variant="primary">Zaloguj się</b-button>
      <p>
        Nie masz jeszcze konta?
        <b-button type="button" variant="primary" @click="changeForm()"
          >Zarejestruj się</b-button
        >.
      </p>
    </b-form>
    <!-- Register form -->
    <b-form v-else>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Repeat password:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.passwordRepeated"
          type="password"
          required
          placeholder="Enter a password again"
        ></b-form-input>
      </b-form-group>
      <b-button @click="signUp" type="button" variant="primary"
        >Zarejestruj się</b-button
      >
      <p>
        Zarejestrowany?
        <b-button type="button" variant="primary" @click="changeForm()"
          >Zaloguj się</b-button
        >
        <b-button type="button" variant="primary" @click="googleSignUp()"
          >Google</b-button
        >.
      </p>
    </b-form>
  </b-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "WelcomePage",
  data() {
    return {
      showLoginForm: true,
      form: {
        email: "",
        password: "",
        passwordRepeated: "",
      },
    };
  },
  methods: {
    signUp: function() {
      if (this.form.passwordRepeated != this.form.password) {
        alert("Hasła się różnią");
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(
          function() {
            alert("Zostałeś Zarejestrowany");
          },
          function(err) {
            alert("Błąd" + err.message);
          }
        );
    },
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(
          function() {
            alert("Zostałeś zalogowany");
          },
          function(err) {
            alert("Błąd" + err.message);
          }
        );
    },
    googleSignUp: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = result.credential.accessToken;
          // The signed-in user info.
          //var user = result.user;
          alert(result.message);
        })
        .catch(function(error) {
          alert(error.message);
          // Handle Errors here.
          //var errorCode = error.code;
          //var errorMessage = error.message;
          // The email of the user's account used.
          //var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          /// ...
        });
    },
    changeForm: function() {
      this.showLoginForm = !this.showLoginForm;
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
