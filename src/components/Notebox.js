import React, { Component } from 'react';
import 'whatwg-fetch';
import Notelist from './Notelist';
import Noteform from './Noteform';


class Notebox extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            text: ''
        };
        this.pollInterval = null;
    }
    componentDidMount() {
        this.loadNotesFromServer();
        if (!this.pollInterval) {
            this.pollInterval = setInterval(this.loadNotesFromServer, 2000);
        }
    }

    componentWillUnmount() {
        if (this.pollInterval) clearInterval(this.pollInterval);
        this.pollInterval = null;
    }

    loadNotesFromServer = () => {
        fetch('/note/add_note')
            .then(data => data.json())
            .then((res) => {
                if (!res.success) this.setState({ error: res.error });
                else this.setState({ data: res.data });
            });
    }
    onChangeText = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    submitNote = (e) => {
        e.preventDefault();
        const { text } = this.state;
        if (!text) return;
        fetch('/note/add_note', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        }).then(res => res.json()).then((res) => {
            if (!res.success) this.setState({ error: res.error.message || res.error });
            else this.setState({ text: '', error: null });
        });
    }

    onUpdateNote = (id) => {
        const oldNote = this.state.data.find(c => c._id === id);
        if (!oldNote) return;
        this.setState({
            note: oldNote.note,
            updateId: id
        });
    }

    onDeleteNote = (id) => {
        const i = this.state.data.findIndex(c => c._id === id);
        const data = [
            this.state.data.slice(0, i),
            this.state.data.slice(i + 1)
        ];
        this.setState({ data });
        fetch(`localhost:8000/note/note/${id}`, { method: 'DELETE' })
            .then(res => res.json()).then((res) => {
                if (!res.success) this.setState({ error: res.error });
            });
    }

    submitNote = (e) => {
        e.preventDefault();
        const { text, updateId } = this.state;
        if (!text) return;
        if (updateId) {
            this.submitUpdatedNote();
        } else {
            this.submitNote();
        }
    }

    submitNewNote = () => {
        const { text } = this.state;
        const data = [
            this.state.data,
            {
                text,
                _id: Date.now().toString(),
                updatedAt: new Date(),
                createdAt: new Date()
            },
        ];
        this.setState({ data });
        fetch('/note', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        }).then(res => res.json()).then((res) => {
            if (!res.success) this.setState({ error: res.error.message || res.error });
            else this.setState({ text: '', error: null });
        })
    }

    submitUpdatedNote = () => {
        const { text, updateId } = this.state;
        fetch(`/note/${updateId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        }).then(res => res.json()).then((res) => {
            if (!res.success) this.setState({ error: res.error.message || res.error });
            else this.setState({ texxt: '', updateId: null });
        });
    }
    render() {
        return (
            <div className='container'>
                <div className='notes'>
                    <h2>Notes:</h2>
                    <Notelist data={this.state.data}
                        handleDeleteNote={this.onDeleteNote}
                        handleUpdateNote={this.onUpdateNote}
                    />
                </div>
                <div className='form'>
                    <Noteform text={this.state.text}
                        handleChangeText={this.onChangeText}
                        handleSubmit={this.submitNote} />
                </div>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

export default Notebox;