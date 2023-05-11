import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../utils/supabaseclient";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [advices, setAdvices] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const createPost = (id) => {
        navigate(`/task/${id}`,
            {
                state: {
                    id: id,
                }
            });
    }

    useEffect(() => {
        getAdvice();
    }, []);

    const getAdvice = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("notes")
            .select("id, title, description").order('id', {ascending: true});
        if (!error) {
            setLoading(false)
            // console.log("advice data: ", data);
            const filteredData = data.filter(item => !item.deleted);
            setAdvices(filteredData);
        } else {
            setLoading(false)
            console.log("error while fetching advice data: ", error);
        }
    };

    return (
        <>
            <section className='common_sec'>
                <div className="home_container">
                    <h4>Welcome back, Mike!</h4>
                    <div className="">
                        <div className="row">
                            {advices &&
                                advices.map((advice, index) => (
                                    <div className="col-4">
                                        <div onClick={() => {createPost(advice.id)}} 
                                        className="home_notes_card" key={advice?.id}>
                                            <h4>{advice.title}</h4>
                                            <p>{advice.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home