<template>
  <div>
    <form role="form">
      <div>
        <div class="form-group">
          <label>Język</label>
          <input class="form-control" placeholder="Kaszubski" />
        </div>

        <div class="form-group">
          <label>Napisz coś od siebie</label>
          <textarea
            class="form-control"
            placeholder="DIABLE, JAK PRZEKLINAĆ PO KASZUBSKU?"
            rows="3"
          ></textarea>
        </div>

        <div class="form-group">
          <label>Znajomość</label>
          <div class="checkbox">
            <label> <input type="checkbox" value="" />A </label>
          </div>
          <div class="checkbox">
            <label> <input type="checkbox" value="" />B </label>
          </div>
          <div class="checkbox">
            <label> <input type="checkbox" value="" />C </label>
          </div>
          <div class="checkbox">
            <label> <input type="checkbox" value="" />Native Speaker </label>
          </div>
        </div>
        <div class="form-group">
          <label>Widoczność</label>
          <div class="radio">
            <label>
              <input
                type="radio"
                name="public"
                id="optionsRadios1"
                value="option1"
                checked
              />Publiczny
            </label>
          </div>
          <div class="radio">
            <label>
              <input
                type="radio"
                name="private"
                id="optionsRadios2"
                value="option2"
              />Prywatny
            </label>
          </div>
        </div>
        <div class="form-group">
          <label>Znam od</label>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
