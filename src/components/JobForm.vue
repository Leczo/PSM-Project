<template>
  <div>
    <form role="form">
      <div>
        <div class="form-group">
          <label>Nazwa firmy</label>
          <input
            class="form-control"
            placeholder="Bolek & lolek Sp. Z. O.o. "
          />
        </div>
        <div class="form-group">
          <label>Stanowisko</label>
          <input
            type="text"
            placeholder="animator dla delfinów"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label>Jak wspominasz tą pracę?</label>
          <textarea
            class="form-control"
            placeholder="Będzie mi brakować tej szkoły."
            rows="3"
          ></textarea>
        </div>

        <div class="form-group">
          <label>Zdobyte doświadczenie</label>
          <div class="checkbox">
            <label> <input type="checkbox" value="" />1 </label>
          </div>
          <div class="checkbox">
            <label> <input type="checkbox" value="" /> 2 </label>
          </div>
          <div class="checkbox">
            <label> <input type="checkbox" value="" />3 </label>
          </div>
          <div class="checkbox">
            <label> <input type="checkbox" value="" />4 </label>
          </div>
          <div class="checkbox">
            <label> <input type="checkbox" value="" />5 </label>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
