<form action="/search-result/search={request}" method="get" autocomplete="off" class="form-search" accept-charset="utf-8">
  {{csrf_field()}}
  <div class="cat-wrap cat-wrap-v1" id="sr-list">
  <select name="sub_id" id="searcat">
    <option selected hidden @if(Request::is('search-result/*')) @if($sub_id != 0) value="{{App\Subcat::find($sub_id)->id}}" @else value="0" @endif @else value="0" @endif>@if(Request::is('search-result/*')) @if($sub_id != 0) {{App\Subcat::find($sub_id)->name}} @else {{__('app.All')}} @endif @else {{__('app.All_categories')}} @endif</option>
  </select>
    <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
    <div class="all-categories">
      <div class="cat-list-search"><div class="title" data="0"><b>{{__('app.All')}}</b></div></div>
      @foreach(App\Category::all() as $cat)
        <div class="cat-list-search">
          <div class="title" data="{{$cat->id}}">
            {{$cat->name}}
          </div>
          <ul>
            @foreach($subcat = App\Subcat::where('parent_id',$cat->id)->get() as $sb)
            <li data="{{$sb->id}}">{{$sb->name}}</li>
            @endforeach
          </ul>
        </div>
      @endforeach
    </div>
  </div>
  <div class="box-search">
    <input type="text" autocomplete="off" id="getsearchtag" list="pros" name="search" placeholder="{{ trans('app.search-placeholder')}}..." @if(Request::is('search-result/*')) value="{{$search}}" @else value="{{ isset($s) ?  $s : ''}}" @endif oninvalid="this.setCustomValidity('{{__('app.Please_enter_value_for_search')}}')" oninput="setCustomValidity('')" required>
    <span class="btn-search">
      <button type="submit" class="waves-effect"><img data-src="/img/icons/search-2.png" alt=""></button>
    </span>
    <div class="search-suggestions">
      <div class="box-suggestions">
        <div class="title">
          {{__('app.Search_suggestions')}}
        </div>
        <ul id="pros"></ul>
      </div>
    </div>
  </div>
</form>
