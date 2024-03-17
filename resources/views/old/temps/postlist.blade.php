@extends('admin.adminmaster')


@section('navbar')
<title>{{ trans('app.postlist')}}</title>

	<div class="wrapper">
		<div class="container">
			<div class="row">


				<div class="span9">
					<div class="content">

						<div class="module">
							<div class="module-head">
								<h3>All Posts</h3>
							</div>
							<div class="module-body table">
								@if(Session::has('successmessage'))
									<center>
										<div class="col-md-4" style="width:90%;">
											<div class="alert alert-success">
												{{Session::get('successmessage')}}
											</div>
										</div>
									</center>
								@endif
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" >
									<thead>
										<tr>
											<th>Post ID</th>
											<th>User</th>
											<th style="width:40%;">Post</th>
											<th>X</th>
										</tr>
									</thead>
									<tbody>
										@foreach($post as $pst)
										<tr class="odd gradeX">
											<td>{{$pst->id}}</td>
											<td>
												@php
												$user = App\User::all()
												@endphp
												@foreach($user as $user)
												@if($user->id==$pst->user_id)
												<a href="/userprofile/{{$user->id}}">{{$user->name}} {{$user->surname}}</a>
												@endif
												@endforeach
											</td>
											<td>{{substr($pst->body,0,100)}}
											@if(strlen($pst->body)>100)
											<a href="#">more...</a>
											@endif
										</td>
											<td><a href=""><button class="btn btn-success">Edit</button></a>&nbsp;
												<a href=""><button class="btn btn-danger" data-toggle="modal" data-target="#Modalpost-{{$pst->id}}">Delete</button></a>


												<div class="modal fade" id="Modalpost-{{$pst->id}}" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true" style="margin-top:0%;">
												<div class="modal-dialog" >
													<div class="modal-content" style="box-shadow:10px 1px 40px 1px gray;">
														<div class="modal-header" style="background-color:white;">
															Are you sure to delete <i>{{substr($pst->body,0,30)}}</i>?
														</div>
															<div class="modal-footer">
																	<button type="reset" class="btn btn-danger" data-dismiss="modal">No</button>
																	<a href="/postdelete/{{$pst->id}}" class="btn btn-primary">Yes</a>
															</div>
													</div>
												</div>
												</div>

											</td>
										</tr>
										@endforeach
									</tbody>
									<tfoot>
										<tr>
											<th>Post ID</th>
											<th>User</th>
											<th>Post</th>
											<th>X</th>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>



						<!--/.module-->
							<!-- subcategories -->
							<div class="module">
								<div class="module-head">
									<h3>All Comments</h3>
								</div>
								<div class="module-body table">
									<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%">
										<thead>
											<tr>
												<th>Comment ID</th>
												<th>User</th>
												<th style="width:40%;">Comment</th>
												<th>Post ID</th>
												<th>X</th>
											</tr>
										</thead>
										<tbody>
											@foreach($comment as $comm)
											<tr class="odd gradeX">
												<td>{{$comm->id}}</td>
												<td>@php
												$user = App\User::all()
												@endphp
												@foreach($user as $user)
												@if($user->id==$comm->user_id)
												<a href="/userprofile/{{$user->id}}">{{$user->name}} {{$user->surname}}</a>
												@endif
												@endforeach
												</td>
												<td>{{substr($comm->body,0,100)}}
													@if(strlen($comm->body)>100)
													<a href="#">more...</a>
													@endif
												</td>
												<td>{{$comm->post_id}}	</td>

												<td><button class="btn btn-success">Edit</button>&nbsp;
													<button class="btn btn-danger" data-toggle="modal" data-target="#Modalcat-{{$comm->id}}">Delete</button>

													<div class="modal fade" id="Modalcat-{{$comm->id}}" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true" style="margin-top:0%;">
													<div class="modal-dialog" >
														<div class="modal-content" style="box-shadow:10px 1px 40px 1px gray;">
															<div class="modal-header" style="background-color:white;">
																Are you sure to delete <i>{{substr($comm->body,0,30)}}</i>?
															</div>
																<div class="modal-footer">
																		<button type="reset" class="btn btn-danger" data-dismiss="modal">No</button>
																		<a href="/commentdelete/{{$comm->id}}" class="btn btn-primary">Yes</a>
																</div>
														</div>
													</div>
													</div>

												</td>
											</tr>
											@endforeach
										</tbody>
										<tfoot>
											<tr>
												<th>Comment ID</th>
												<th>User</th>
												<th>Comment</th>
												<th>Post ID</th>
												<th>X</th>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>




					</div><!--/.content-->
				</div><!--/.span9-->
			</div>
		</div><!--/.container-->
	</div><!--/.wrapper-->

@endsection
