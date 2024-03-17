<div class="block popular-tags-area ">
  <div class="most-searched">
    <h4 class="white">{{ trans('app.most_searched')}}</h4>
  </div>
  <div class="tag">
    <ul>
      @if(2 == 3)
      @php($tags = DB::select(DB::raw('SELECT tag_name, COUNT(*) FROM tag GROUP BY tag_name ORDER BY COUNT(*) DESC LIMIT 10')) )
      @endif
        @foreach($tags = App\Tag::orderBy('count','desc')->take(20)->get() as $tag)
        <form action="/search-result/search={request}" method="get">
          {{csrf_field()}}
          <li>
            <input type="hidden" name="search" value="{{$tag->tag_name}}" required>
            <button class="buttonn capi" type="submit" title="{{$tag->tag_name}}">
           &nbsp; {{$tag->tag_name}} &nbsp;</button>
          </li>
        </form>
        @endforeach
    </ul>
  </div>
</div>
