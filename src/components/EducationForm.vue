<template>
  <form role="form">
    <div>
      <div class="form-group">
        <label>Nazwa placówki</label>
        <input class="form-control" placeholder="np. UEK" />
      </div>
      <div class="form-group">
        <label>Profil</label>
        <input
          type="text"
          placeholder="np.Informatyczny"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label>Uczęszałem od</label>
        <select class="form-control">
          <option>2003</option>
          <option>2004</option>
          <option>2005</option>
          <option>2006</option>
          <option>2007</option>
          <option>2008</option>
          <option>2009</option>
          <option>2010</option>
          <option>2011</option>
          <option>2012</option>
          <option>2013</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>Nadal...</option>
        </select>
      </div>
      <div class="form-group">
        <label>Do:</label>
        <select class="form-control">
          <option>2003</option>
          <option>2004</option>
          <option>2005</option>
          <option>2006</option>
          <option>2007</option>
          <option>2008</option>
          <option>2009</option>
          <option>2010</option>
          <option>2011</option>
          <option>2012</option>
          <option>2013</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>Nadal...</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Dodaj</button>
      <button type="reset" class="btn btn-default">Resetuj</button>
    </div>
  </form>
</template>

<script>
//import db from "firebase";
export default {
  name: "EductionForm",
  data() {
    return null;
  },
  methods: {
    saveEdForm: function() {
      return null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
