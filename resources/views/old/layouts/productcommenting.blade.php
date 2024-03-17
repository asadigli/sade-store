                  <div class="tab-pane fade" id="comment_tab">
                      <div class="product-tabs-content-inner clearfix">
                        <div class="single-box">
                          <h2 class="">{{ trans('app.comments')}}</h2>
                          <div class="comment-list">
                            <ul>
                              @php($newscomment = App\Newscomment::where('verify',1)->where('news_id',0)->where('product_id',$productdetails->id)->orderBy('created_at','desc')->get())
                              @if(count($newscomment) == 0)
                              <center><i class="capi gray">{{ trans('app.no_comment_here')}}</i></center>
                              @endif
                              @foreach($newscomment as $nc)
                              <li>
                                <div class="avartar"> <img src="//img.sade.store/user.png" alt="{{ trans('app.commenter')}}" class="op-06"> </div>
                                <div class="comment-body">
                                  <div class="comment-meta"> <span class="author"><a href="mailto:{{$nc->email}}">{{$nc->name}} {{$nc->surname}}</a></span>
                                    <span> <i class="gray"> - {{$nc->rating}}</i> <i class="fa fa-star orange"></i></span>
                                    <span class="date"><i><small>{{$nc->created_at->diffForHumans()}}</small> </i> </span>
                                  </div>
                                  <div class="comment">
                                    {!! nl2br(e($nc->message)) !!}
                                  </div>
                                </div>
                              </li>
                              @endforeach
                            </ul>
                          </div>
                        </div>
                        <div class="single-box comment-box">
                          <h2>{{trans('app.leave_a_comment')}}</h2>
                          <div class="coment-form">
                            <p>{{ trans('app.here_you_can_say_your_opinion_about_the_news')}}</p>
                              <div class="alert alert-success hidden_alert" id="comment_sent" style="display:none;">{{ trans('app.product_comment_text')}}</div>
                              <div class="alert alert-danger hidden_alert" id="comment_sent_failed" style="display:none;">{{ trans('app.product_comment_text_failed')}}</div>
                              <input type="hidden" id="commenter_product_id" value="{{$productdetails->id}}">
                              <div class="row">
                                <div class="col-sm-6">
                                  <label class="capi" for="name">{{ trans('app.name')}}</label><input id="commenter_name" name="name" type="text" minlength="2" maxlength="50" class="form-control capi" placeholder="{{ trans('app.your_name_here')}}..." required>
                                </div>
                                <div class="col-sm-6">
                                  <label class="capi" for="email">{{ trans('app.surname')}}</label><input id="commenter_surname" name="surname" type="text" minlength="2" maxlength="50" class="form-control capi" placeholder="{{ trans('app.your_surname_here')}}..." required>
                                </div>
                                <div class="col-sm-12">
                                  <label class="capi" for="website">{{ trans('app.email')}}</label><input id="commenter_email" name="email" type="email" minlength="2" maxlength="70" class="form-control" placeholder="{{trans('app.your_email_here')}}..." required>
                                </div>
                                <div class="col-sm-6">
                                  <label class="capi-rname" for="rating">{{ trans('app.rating')}}</label>
                                    <span class="ratingg">
                                        <input id="rating5" type="radio" name="commenter_rating" value="5"><label for="rating5">5</label>
                                        <input id="rating4" type="radio" name="commenter_rating" value="4" checked><label for="rating4">4</label>
                                        <input id="rating3" type="radio" name="commenter_rating" value="3"><label for="rating3">3</label>
                                        <input id="rating2" type="radio" name="commenter_rating" value="2" ><label for="rating2">2</label>
                                        <input id="rating1" type="radio" name="commenter_rating" value="1"><label for="rating1">1</label>
                                    </span>
                                </div>
                                <div class="col-sm-12">
                                  <label class="capi" for="message">{{ trans('app.message')}}</label>
                                  <textarea name="message" id="commenter_message" minlength="5" maxlength="500" rows="8" class="form-control" placeholder="{{ trans('app.your_message')}}..." required></textarea>
                                </div>
                              </div>
                              <button class="button capi pull-right" id="AddProductReview"><span>{{ trans('app.send')}}</span></button>
                          </div>
                        </div>
                      </div>
                    </div>
