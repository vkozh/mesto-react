class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _fetch(path, method, bodyObject, form) {
    form?.renderLoading(true);
    return fetch(`${this._url}${path}`, {
      method: method,
      headers: this._headers,
      body: bodyObject ? JSON.stringify(bodyObject) : undefined,
    })
      .then(this._checkResponse)
      .finally(() => form?.renderLoading(false));
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUser() {
    return this._fetch("/users/me", "GET");
  }

  getCards() {
    return this._fetch("/cards", "GET");
  }

  editProfile(name, about, button) {
    return this._fetch(
      "/users/me",
      "PATCH",
      {
        name: name,
        about: about,
      },
      button
    );
  }

  addCard(name, link, button) {
    return this._fetch(
      "/cards",
      "POST",
      {
        name: name,
        link: link,
      },
      button
    );
  }

  deleteCard(cardId) {
    return this._fetch(`/cards/${cardId}`, "DELETE");
  }

  setLike(cardId) {
    return this._fetch(`/cards/${cardId}/likes`, "PUT");
  }

  deleteLike(cardId) {
    return this._fetch(`/cards/${cardId}/likes`, "DELETE");
  }

  changeAvatar(avatar, form) {
    return this._fetch(
      "/users/me/avatar",
      "PATCH",
      {
        avatar: avatar,
      },
      form
    );
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-39",
  headers: {
    authorization: "d0163cf8-cfab-4a34-ac21-cc13d220d7ff",
    "Content-Type": "application/json",
  },
});
export default api;
