import CustomerServices from "./home-customer/CustomerServices";
import CustomerUpdate from "./home-customer/CustomerUpdate";

const Customer = () => {
    return(
        <section className="fancybox-layout1 pt-0 customer-service-section-2">
            <div className="container">
                <div className="row">
                    <CustomerUpdate/>
                    <CustomerServices/>
                </div>
            </div>
        </section>
    )
}

export default Customer;