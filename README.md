# Cali Visiting

This application is a simple guide on visiting California based on northern, central and southern California. There is four selected counties per region with three places to visit for that county. 
The front end of this application is deployed at https://cali-visiting.herokuapp.com/ 

# Code Snippets
```
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
```
