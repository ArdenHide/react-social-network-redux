import React from "react";
import userPhoto from "../../Assets/img/user.jpg"
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import Preloader from "../Shared/Preloader/Preloader";
import { NavLink } from 'react-router-dom';

function FindUsers(props) {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let index = 1; index <= 5; index++) {
        pages.push(index);
    }
    return (
        <div className="col-12 col-md-9 col-lg-10 p-0">
            <div className="bg-dark py-2 mb-4">
                <div className="container text-white">
                    <h1 className="fs-1">Find Users</h1>
                </div>
            </div>
            <div className="row">
                <nav className="mb-3" aria-label='...'>
                    <MDBPagination center size='lg' className='mb-0'>
                        {
                            pages.map(page => {
                                if (props.currentPage === page) {
                                    return (
                                        <MDBPaginationItem key={page} active>
                                            <MDBPaginationLink tag='span'>
                                                {page}
                                                <span className='visually-hidden'>(current)</span>
                                            </MDBPaginationLink>
                                        </MDBPaginationItem>
                                    )
                                }
                                else {
                                    return (
                                        <MDBPaginationItem key={page}>
                                            <MDBPaginationLink onClick={() => { props.onPageChanged(page) }}>{page}</MDBPaginationLink>
                                        </MDBPaginationItem>
                                    )
                                }
                            })
                        }
                    </MDBPagination>
                </nav>
                {props.isFetching ? <Preloader /> : null}
                {
                    props.users.map(user =>
                        <div key={user.id} className="col-12 col-xl-6 d-flex mb-4">
                            <div className="d-flex flex-column">
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                                {
                                    user.followed
                                        ? <MDBBtn onClick={() => { props.unfollow(user.id) }} color='danger'>Unfollow</MDBBtn>
                                        : <MDBBtn onClick={() => { props.follow(user.id) }} >Follow</MDBBtn>
                                }
                            </div>
                            <div className="d-flex flex-column p-3 border w-100">
                                <div className="d-flex justify-content-between">
                                    <NavLink to={'/Profile/' + user.id}>
                                        <h4 className="fs-4">{`${user.name}`}</h4>
                                    </NavLink>
                                    <p className="fs-5">Украина, Одесса</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <p className="fs-5">Age: 20</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default FindUsers;