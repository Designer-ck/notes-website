import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../utils/supabaseclient";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
const Home = () => {

    const [advices, setAdvices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

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
            .select("id, title, description").order('id', { ascending: true });
        if (!error) {
            setLoading(false)
            // console.log("advice data: ", data);
            const filteredData = data.filter(item => !item.deleted);
            setAdvices(filteredData);
        } else {
            setLoading(false)
            console.log("error while fetching notes: ", error);
        }
    };

    const onSort = async (e) => {
        // console.log("on sort event: ", e.target.value)
        // const { data, error } = await supabase.from("notes").select("*");
        // if(!error){
            if(e.target.value === "1"){
                // sort for title
                const {data, error} = await supabase.from("notes").select("*");
                if(!error){
                    const sortedByTitle = data.sort((note_1, note_2) => note_1.title.localeCompare(note_2.title));
                    setAdvices(sortedByTitle);
                }
            } else if(e.target.value === "2"){
                // sort for date created
                const {data, error} = await supabase.from("notes").select("*").order("created_at", {ascending: false});
                if(!error){
                    setAdvices(data);
                }
            } else if(e.target.value === "3"){
                // sort for date modified
                const {data, error} = await supabase.from("notes").select("*").order("modified_at", {ascending: false});
                if(!error){
                    setAdvices(data);
                }
            }

            // const filteredData = data.filter(item => );
        // }
    }

    return (
        <>
            <section className='common_sec'>
                <div className="home_container">
                    <div className="d-flex justify-content-between align-items-center  mb-4 mt-3">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            
                        </Form>
                        <div className="d-flex align-items-center gap-15">
                        <p className="text-nowrap">Sort By : </p>
                        <Form.Select className="sort_selector" aria-label="Default select example" onChange={(e) => onSort(e)}>
                            <option value="">Select...</option>
                            <option value="1">Title</option>
                            <option value="2">Date Created </option>
                            <option value="3">Date Modified </option>
                        </Form.Select>
                        </div>
                    </div>
                    <h4>Welcome back, Mike!</h4>
                    <div className="">
                        <div className="row">
                            {advices &&
                                advices.filter((user) => user.title.toLowerCase().includes(query) || user.description.toLowerCase().includes(query)).map((advice, index) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                        <div onClick={() => { createPost(advice.id) }}
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