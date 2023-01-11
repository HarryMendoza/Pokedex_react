import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";



const Listado = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const ObtenerTodos = async () => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });

    const filtarPokemon = pokemons?.slice(0, 151).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    })

    return (
        <>
            <h1 className="h1">Coleccion de Pokemones</h1>
            <header>
                <input
                    value={query}
                    placeholder="Buscar pokemones"
                    onChange={(event) => setQuery(event.target.value.trim())}
                    type="text"
                    ///width="100%"
                    className="input"
                />
            </header>
            <div className="content-wrapper">
                <div className='content'>

                    <div className="row" gap-4 gap-3 >
                        {filtarPokemon?.slice(0, 200).map((pokemon) => (
                            <Card className="mx-auto " style={{ backgroundColor: "#34495E", width: '18rem', color: "#F4F6F7" }}


                            >
                                <Card.Header className="card-title"><b>Tipo:</b> {pokemon.type}</Card.Header>
                                <Card.Img width="80" height="100" variant="top" src={pokemon.imggif} className="d-block mx-auto w-50" />
                                <Card.Body>
                                    <Card.Title className="card-title" >{pokemon.id} - {pokemon.name}  </Card.Title>
                                    <ListGroup style={{ backgroundColor: "#BDC3C7" }}>
                                        <ListGroup.Item className="list-item-style">
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/512/525/525872.png" /> <b>HP:</b> {pokemon.hp}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/512/3522/3522092.png" /> <b>Ataque:</b> {pokemon.attack}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/512/8037/8037114.png" /> <b>Defensa:</b> {pokemon.defense}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/512/3637/3637532.png" /> <b>E. Ataque:</b> {pokemon.sp_atk}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/512/1065/1065501.png" /> <b>E. Defensa:</b> {pokemon.sp_def}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                alt="171x180"
                                                src="https://cdn-icons-png.flaticon.com/512/47/47203.png" /> <b>Velocidad:</b> {pokemon.speed}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div >

        </>
    )
}
export default Listado;