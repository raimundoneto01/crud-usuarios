import { useState, useEffect } from "react";
import api from "../../service/api";

export function useGetLista() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({});
  const [id, setId] = useState("");

  const handleForm = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  async function GetLista() {
    const resposta = await api.get("usuarios/usuarios");
    const data = resposta.data;
    setList(data);
  }

  async function FormEditar(id) {
    await api.put(`usuarios/usuarios/${id}`, form);
    setId("");
    setForm({});

    const findIndexUserEdite = list.findIndex((u) => u.id === id);
    list[findIndexUserEdite] = {
      ...list[findIndexUserEdite],
      name: form.name,
      sobrenome: form.sobrenome,
      phone: form.phone,
      cidade: form.cidade,
      estado: form.estado,
    };
  }

  const Editar = (list) => {
    setForm(list);
    setId(list.id);
  };

  async function DeletarItems(id) {
    await api.delete(`usuarios/usuarios/${id}`);
    await GetLista();
  }

  useEffect(() => {
    GetLista();
  }, []);

  async function GetFormPost(data) {
    const postage = await api.post("usuarios/usuarios", data);
    setList([...list, postage.data]);
  }

  const handleCadastro = (event) => {
    event.preventDefault();
    const hasValue = Array.from(event.target).filter((Element) => {
      return Element.value !== "";
    });
    if (hasValue.length) {
      GetFormPost({
        name: event.target["name"].value,
        sobrenome: event.target["sobrenome"].value,
        phone: event.target["phone"].value,
        cidade: event.target["cidade"].value,
        estado: event.target["estado"].value,
      });
    }

    event.target["name"].value = "";
    event.target["sobrenome"].value = "";
    event.target["phone"].value = "";
    event.target["cidade"].value = "";
    event.target["estado"].value = "";
  };
  return {
    id,
    form,
    list,
    handleForm,
    FormEditar,
    Editar,
    DeletarItems,
    handleCadastro,
  };
}
