<template>
  <b-jumbotron class="main" container-fluid>
    <b-form v-if="showLoginForm">
      <b-row>
        <b-col>
          <b-button @click="changeForm()" pill variant="primary">
            {{
            logForm
            }}
          </b-button>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-input-group size="lg">
            <template v-slot:prepend>
              <b-input-group-text>
                <b-icon-envelope-open-fill></b-icon-envelope-open-fill>
              </b-input-group-text>
            </template>
            <b-form-input size="lg" v-model="form.email" required placeholder="Wpisz Email"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-input-group size="lg">
            <template v-slot:prepend>
              <b-input-group-text>
                <b-icon-lock-fill></b-icon-lock-fill>
              </b-input-group-text>
            </template>
            <b-form-input size="lg" v-model="form.password" required placeholder="Wpisz Hasło"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-input-group size="lg">
            <template v-slot:prepend>
              <b-input-group-text>
                <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
              </b-input-group-text>
            </template>
            <b-form-input size="lg" v-model="form.name" required placeholder="Powrórz hasło"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <br />

      <b-row>
        <b-col>
          <b-button @click="signUp" variant="primary">Zarejestruj się</b-button>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-button @click="googleSignUp" variant="primary">Rejestracja Google</b-button>
        </b-col>
      </b-row>
    </b-form>

    <b-form v-else>
      <b-row>
        <b-col>
          <b-button @click="changeForm()" pill variant="primary">
            {{
            regForm
            }}
          </b-button>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-input-group size="lg">
            <template v-slot:prepend>
              <b-input-group-text>
                <b-icon-envelope-open-fill></b-icon-envelope-open-fill>
              </b-input-group-text>
            </template>
            <b-form-input size="lg" v-model="form.email" required placeholder="Wpisz Email"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-input-group size="lg">
            <template v-slot:prepend>
              <b-input-group-text>
                <b-icon-lock-fill></b-icon-lock-fill>
              </b-input-group-text>
            </template>
            <b-form-input size="lg" v-model="form.password" required placeholder="Wpisz Hasło"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <br />

      <br />

      <b-row>
        <b-col>
          <b-button @click="signIn" variant="primary">Zaloguj sie</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-jumbotron>
</template>

<script>
import firebase from "firebase";
import router from "../router.js";

export default {
  name: "WelcomePage",
  data() {
    return {
      showLoginForm: false,
      wrongCredencials: false,
      regForm: "Formularz logowania",
      logForm: "Formularz rejestracji",
      form: {
        email: "",
        password: "",
        passwordRepeated: ""
      }
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
            alert("Błąd " + err.message);
          }
        );
    },
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(
          function() {
            router.replace("home");
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
          // This gives y ou a Google Access Token. You can use it to access the Google API.
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
    }
  }
};
</script>

<style scoped>
.main {
  margin-top: 50%;
  margin: auto;
  vertical-align: middle;
  text-align: center;
}
</style>
