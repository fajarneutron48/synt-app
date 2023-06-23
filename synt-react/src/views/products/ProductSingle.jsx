import { Link } from "react-router-dom";

export default function ProductSingle(){
    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        <Link className="text-secondary" to="/products">
                            <i className="fa fa-arrow-left"></i>
                        </Link>&nbsp;
                        Add Products
                    </h6>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label  className="form-label">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}