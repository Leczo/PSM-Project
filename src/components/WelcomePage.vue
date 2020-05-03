<template>
  <div>
    <b-jumbotron class="main" container-fluid>
      <!-- Register form -->
      <h1 id="title">
        <span class="title">GENERATOR CV</span>
      </h1>
      <b-form class="form" v-if="showLoginForm">
        <b-row>
          <b-col>
            <b-button @click="changeForm()" pill variant="primary">{{ logForm }}</b-button>
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
              <b-form-input
                size="lg"
                v-model="form.password"
                @keyup.enter.native="signUp"
                required
                type="password"
                placeholder="Wpisz Hasło"
              ></b-form-input>
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
              <b-form-input
                @keyup.enter.native="signUp"
                size="lg"
                v-model="form.passwordRepeated"
                required
                type="password"
                placeholder="Powtórz hasło"
              ></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
        <br />

        <b-row>
          <b-col>
            <b-alert v-if="registrationFailed" show variant="danger">
              {{
              registrationFailed
              }}
            </b-alert>
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
      <!-- Login form -->
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
              <b-form-input
                size="lg"
                @keyup.enter.native="signIn"
                v-model="form.email"
                required
                placeholder="Wpisz Email"
              ></b-form-input>
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
              <b-form-input
                @keyup.enter.native="signIn"
                size="lg"
                v-model="form.password"
                required
                type="password"
                placeholder="Wpisz Hasło"
              ></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
        <br />

        <b-row>
          <b-col>
            <b-alert v-if="loginFailed" show variant="danger">
              {{
              loginFailed
              }}
            </b-alert>
            <b-alert v-else-if="registrationSuccess" show variant="success">
              {{
              registrationSuccess
              }}
            </b-alert>
            <b-button @click="signIn" variant="primary">Zaloguj się</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-jumbotron>
  </div>
</template>

<script>
import firebase from "firebase";
import router from "../router.js";

export default {
  name: "WelcomePage",
  data() {
    return {
      loginFailed: "",
      registrationFailed: "",
      registrationSuccess: "",
      showLoginForm: false,
      regForm: "Nie masz jeszcze konta? Zarejestruj się!",
      logForm: "Przejdź do formularza logowania",
      form: {
        email: "",
        password: "",
        passwordRepeated: ""
      }
    };
  },
  methods: {
    signUp: function() {
      if (this.form.password != this.form.passwordRepeated) {
        this.registrationFailed = "Passwords must match.";
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.registrationFailed = "";
          this.loginFailed = "";
          this.registrationSuccess =
            "You have successfully registered. Now you can sign in.";
          this.changeForm();
        })
        .catch(err => {
          this.registrationFailed = err.message;
        });
    },
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => router.replace("home"))
        .catch(err => {
          this.loginFailed = err.message;
        });
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

#title {
  font-weight: strong;
  font-family: Fira-code;
  display: fixed;
  justify-content: center;
  /* TODO */
}
.main {
  margin-top: 50%;
  margin: auto;
  text-align: center;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-family: "Montserrat", sans-serif;
  display: block;
  padding: 0 25px 25px 25px;
  margin-top: 0;
}
</style>
